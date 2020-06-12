import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CarouselImagePost } from '../models/CarouselImagePost';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarouselImagePostService {
  carouselImagePostsCollection: AngularFirestoreCollection<CarouselImagePost>;
  carouselImagePosts: Observable<CarouselImagePost[]>;
  carouselImagePostDoc: AngularFirestoreDocument<CarouselImagePost>;

  constructor(public afs: AngularFirestore) {
    this.carouselImagePosts = this.afs.collection('carouselImagePost').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CarouselImagePost
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getCarouselImagePost() {
    return this.carouselImagePosts;
  }

  addCarouselImagePost(imagepost: CarouselImagePost) {
    this.carouselImagePostsCollection.add(imagepost);
  }

  deleteCarouselImagePost(imagepost: CarouselImagePost) {
    this.carouselImagePostDoc = this.afs.doc(`imagepost/${imagepost.id}`);
    this.carouselImagePostDoc.delete();
  }

  updateCarouselImagePost(imagepost: CarouselImagePost) {
    this.carouselImagePostDoc = this.afs.doc(`imagepost/${imagepost.id}`);
    this.carouselImagePostDoc.update(imagepost);
  }
}

