import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User} from '../models/User';
import { map } from "rxjs/operators";

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) { 
    
  
    this.usersCollection = this.afs.collection('users');
    this.users = this.afs.collection('users').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as User
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.usersCollection.add(user);
  }

  deleteUser(user: User){
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User){
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

}
