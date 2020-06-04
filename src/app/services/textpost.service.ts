import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { TextPost } from '../models/TextPost';
import { map } from "rxjs/operators";

@Injectable()
export class TextpostService {
  textpostsCollection: AngularFirestoreCollection<TextPost>;
  textposts: Observable<TextPost[]>;
  textpostsDoc: AngularFirestoreDocument<TextPost>;

  constructor(public afs: AngularFirestore) { 
    
    this.textposts = this.afs.collection('textpost').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as TextPost
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    //this.usersCollection = this.afs.collection('User');
    this.textpostsCollection = this.afs.collection('textpost');
    this.textposts = this.afs.collection('textpost').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as TextPost
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getTextPosts(){
    return this.textposts;
  }

  addTextPost(textpost: TextPost){
    this.textpostsCollection.add(textpost);
  }

  deleteTextpost(textpost: TextPost){
    this.textpostsDoc = this.afs.doc(`textpost/${textpost.id}`);
    this.textpostsDoc.delete();
  }

  updateTextpost(textpost: TextPost){
    this.textpostsDoc = this.afs.doc(`textpost/${textpost.id}`);
    this.textpostsDoc.update(textpost);
  }

}
