import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagePost } from '../../../models/ImagePost';
import { ImagepostService } from 'src/app/services/imagepost.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {

  post: ImagePost;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;

  imageChanged: boolean = false;
  someThingChanged: boolean = false;

  downloadURL: string;
  oldDownloadUrl: string;

  isNew: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagePost, public imagepostService: ImagepostService, private storage: AngularFireStorage, private db: AngularFirestore) {
    this.post = data;

    // Check if you are creating a new post
    if (!this.post.id) {
      this.isNew = true;
    }

    this.oldDownloadUrl = this.post.path;
  }

  onNoClick(): void {
    console.log("nothing was clicked");
    if (this.imageChanged) {
      console.log("image has changed so delete");
      this.storage.storage.refFromURL(this.downloadURL).delete();
      this.dialogRef.close();
    } else {
      console.log("nothing was changed");
      this.dialogRef.close();
    }
  }

  delete() {
    this.imagepostService.deleteImagepost(this.post);
    this.storage.storage.refFromURL(this.downloadURL).delete();
    this.dialogRef.close();
  }

  setSomeThingChangedToTrue() {
    this.someThingChanged = true;
    console.log("something has changed")
  }

  save(post: ImagePost) {

    if (!this.isNew) {
      console.log("trying to save");
      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {
        console.log("something has changed");
        //Only change the image if it was really changed
        if (this.imageChanged) {
          console.log("image has changed");
          post.path = this.downloadURL;
          this.storage.storage.refFromURL(this.oldDownloadUrl).delete();
          console.log("deleted from storage");
        }

        this.imagepostService.updateImagepost(post);
        console.log("updated image");
      }
    } else {
      console.log("trying to save");
      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {
        console.log("something has changed");
        //Only change the image if it was really changed
        if (this.imageChanged) {
          console.log("image has changed");
          post.path = this.downloadURL;
        }

        this.imagepostService.addImagePost(post);
        console.log("added image");
      }
    }
    this.dialogRef.close();
  }

  cancel() {
    console.log("cancel was clicked");
    if (this.imageChanged) {
      console.log("image has changed so delete");
      this.storage.storage.refFromURL(this.downloadURL).delete();
      this.dialogRef.close();
    } else {
      console.log("nothing was changed");
      this.dialogRef.close();
    }
  }

  startUpload(event) {

    this.post.path = event.target.files[0].name;
    // The storage path
    const name = `imageposts/${Date.now()}_${event.target.files[0].name}`;

    console.log("image name: " + event.target.files[0].name);

    // Reference to storage bucket
    const ref = this.storage.ref(name);

    // The main task
    this.task = this.storage.upload(name, event.target.files[0]);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    console.log("Starting upload");

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        console.log("still waiting for finalize");
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.post.path = this.downloadURL;
        this.imageChanged = true;
      }),
    );

    this.snapshot.subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }

  formatNumber(valueToFormat: string) {
    return Math.round(parseInt(valueToFormat) * 100) / 100 + "%";
  }


}