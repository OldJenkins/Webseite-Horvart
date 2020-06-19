import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from "rxjs/operators";
import { AdminInformationService } from './admin-information.service';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;


  user$: Observable<User>;
  // user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private adminInfoService: AdminInformationService,
    private router: Router) {



    this.userCollection = this.afs.collection('user');
    this.users = this.afs.collection('user').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User
        data.uid = a.payload.doc.id;
        return data;
      });
    }));



    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);

    credential.user.email


    return this.updateUserData(credential.user);
  }





  private updateUserData({ uid, email, displayName, photoURL, isAdmin }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${uid}`);

    const data = {
      uid,
      email,
      displayName,
      photoURL,
      isAdmin: false
    }

    //Ermitteln der User aus dem Backend und Prüfung, ob der User Admin ist
    this.users.subscribe(response => {
      let user: any[] = response;
      user.forEach(element => {
        if (element.uid == uid) {
          if (element.isAdmin == true) {
            data.isAdmin = true;
            this.adminInfoService.setIsAdminLoggedIn(true); //Observable benachrichtigen: Admin eingeloggt
            return userRef.set(data, { merge: true })
          } else {
            this.adminInfoService.setIsAdminLoggedIn(false);
            this.adminInfoService.setIsUserLoggedIn(true); //Observable benachrichtigen: User (ohne Admin) eingeloggt
            return userRef.set(data, { merge: true })
          }
        }
        this.adminInfoService.setIsAdminLoggedIn(false);
        this.adminInfoService.setIsUserLoggedIn(true); //Observable benachrichtigen: User (ohne Admin) eingeloggt
        return userRef.set(data, { merge: true })

      });

    })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.adminInfoService.setIsAdminLoggedIn(false);
    this.adminInfoService.setIsUserLoggedIn(false);
    this.router.navigate(['/']);
  }
}
