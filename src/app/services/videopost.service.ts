import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { VideoPost } from '../models/VideoPost';
import { map } from "rxjs/operators";

@Injectable()
export class VideopostService {
  videopostsCollection: AngularFirestoreCollection<VideoPost>;
  videoposts: Observable<VideoPost[]>;
  videopostsDoc: AngularFirestoreDocument<VideoPost>;

  constructor(public afs: AngularFirestore) { 
    
    this.videoposts = this.afs.collection('videoposts').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as VideoPost
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    //this.usersCollection = this.afs.collection('User');
    this.videopostsCollection = this.afs.collection('videoposts');
    this.videoposts = this.afs.collection('videoposts').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as VideoPost
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getVideoPosts(){
    return this.videoposts;
  }

  addVideoPost(textpost: VideoPost){
    this.videopostsCollection.add(textpost);
  }

  deleteVideopost(videopost: VideoPost){
    this.videopostsDoc = this.afs.doc(`videoposts/${videopost.id}`);
    this.videopostsDoc.delete();
  }

  updateVideopost(videopost: VideoPost){
    this.videopostsDoc = this.afs.doc(`videoposts/${videopost.id}`);
    this.videopostsDoc.update(videopost);
  }

}
