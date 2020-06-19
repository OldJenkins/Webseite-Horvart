import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextPost } from '../../../models/TextPost';
import { TextpostService } from 'src/app/services/textpost.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';




@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.css']
})
export class TextDialogComponent implements OnInit {

  post: TextPost;

  someThingChanged: boolean = false;

  isNew: boolean;

  constructor(
    public dialogRef: MatDialogRef<TextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TextPost,
    public textpostService: TextpostService,
    private db: AngularFirestore) {

    this.post = data;

    // Check if you are creating a new post
    if (!this.post.id) {
      this.isNew = true;
    }
  }

  ngOnInit(): void {
  }

  delete() {
    this.textpostService.deleteTextpost(this.post);
    this.dialogRef.close();
  }

  setSomeThingChangedToTrue() {
    this.someThingChanged = true;
    console.log("something has changed")
  }

  save(post: TextPost) {

    if (!this.isNew) {
      console.log("trying to save");
      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {
        console.log("something has changed");
        this.textpostService.updateTextpost(post);
        console.log("updated text");
      }
    } else {
      console.log("trying to save");
      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {
        console.log("something has changed");
        post.timestamp = Date.now();
        this.textpostService.addTextPost(post);
        console.log("added image");
      }
    }
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
