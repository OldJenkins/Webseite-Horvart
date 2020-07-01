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
import { exit } from 'process';
import { element } from 'protractor';


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
      switchMap(gUser => {         
        // Logged in
        if (gUser) {

          this.users.subscribe(response => {
            let user: any[] = response;
            
            let foundUser = user.find(element => element.uid == gUser.uid);

            if (foundUser == undefined) {
              this.adminInfoService.setIsAdminLoggedIn(false);
              this.adminInfoService.setIsUserLoggedIn(true);
            } else if (foundUser.isAdmin == true) {
              this.adminInfoService.setIsAdminLoggedIn(true);
              this.adminInfoService.setIsUserLoggedIn(true);
            }
          })

          return this.afs.doc<User>(`user/${gUser.uid}`).valueChanges();
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


    let shouldUserBeAdmin = false;

    //Ermitteln der User aus dem Backend und Prüfung, ob der User Admin ist
    this.users.subscribe(response => {
      let user: any[] = response;

      let foundUser = user.find(element => element.uid == uid);

      if (foundUser == undefined) {
        this.adminInfoService.setIsAdminLoggedIn(false);
        this.adminInfoService.setIsUserLoggedIn(true);
      } else if (foundUser.isAdmin == true) {
        shouldUserBeAdmin = true;
        this.adminInfoService.setIsAdminLoggedIn(true);
        this.adminInfoService.setIsUserLoggedIn(true);
      }
      data.isAdmin = shouldUserBeAdmin;

      return userRef.set(data, { merge: true })
    })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.adminInfoService.setIsAdminLoggedIn(false);
    this.adminInfoService.setIsUserLoggedIn(false);
    this.router.navigate(['/']);
  }
}