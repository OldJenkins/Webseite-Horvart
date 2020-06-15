import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ImagePost } from '../models/ImagePost';
import { map } from "rxjs/operators";

@Injectable()
export class ImagepostService {
  imagepostsCollection: AngularFirestoreCollection<ImagePost>;
  imageposts: Observable<ImagePost[]>;
  imagepostsDoc: AngularFirestoreDocument<ImagePost>;

  constructor(public afs: AngularFirestore) {

    this.imageposts = this.afs.collection('imagepost').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ImagePost
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    //this.usersCollection = this.afs.collection('User');
    this.imagepostsCollection = this.afs.collection('imagepost');
    this.imageposts = this.afs.collection('imagepost').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ImagePost
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getImagePosts() {
    return this.imageposts;
  }

  addImagePost(imagepost: ImagePost) {
    this.imagepostsCollection.add(imagepost);
  }

  deleteImagepost(imagepost: ImagePost) {
    this.imagepostsDoc = this.afs.doc(`imagepost/${imagepost.id}`);
    this.imagepostsDoc.delete();
  }

  updateImagepost(imagepost: ImagePost) {
    this.imagepostsDoc = this.afs.doc(`imagepost/${imagepost.id}`);
    this.imagepostsDoc.update(imagepost);
  }

}
