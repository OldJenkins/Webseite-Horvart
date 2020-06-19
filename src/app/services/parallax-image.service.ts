import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ParallaxImagePost } from '../models/ParallaxImagePost';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ParallaxImageService {
  parallaxImagePostCollection: AngularFirestoreCollection<ParallaxImagePost>;
  parallaxImagePost: Observable<ParallaxImagePost[]>;
  parallaxImageDoc: AngularFirestoreDocument<ParallaxImagePost>;

  constructor(public afs: AngularFirestore) {

    this.parallaxImagePost = this.afs.collection('parallaxImagePost').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ParallaxImagePost
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getParallaxImagePost() {
    return this.parallaxImagePost;
  }

  addImagePost(imagepost: ParallaxImagePost) {
    this.parallaxImagePostCollection.add(imagepost);
  }

  deleteImagepost(imagepost: ParallaxImagePost) {
    this.parallaxImageDoc = this.afs.doc(`parallaxImagePost/${imagepost.id}`);
    this.parallaxImageDoc.delete();
  }

  updateImagepost(imagepost: ParallaxImagePost) {
    this.parallaxImageDoc = this.afs.doc(`parallaxImagePost/${imagepost.id}`);
    this.parallaxImageDoc.update(imagepost);
  }


}

