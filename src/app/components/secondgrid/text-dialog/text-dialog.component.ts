import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextPost } from '../../../models/TextPost';
import { TextpostService } from 'src/app/services/textpost.service';
import { AdminInformationService } from '../../../services/admin-information.service';




@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.css']
})
export class TextDialogComponent implements OnInit {

  post: TextPost;

  someThingChanged: boolean = false;

  isNew: boolean;

  isAdmin: boolean;

  constructor(
    public dialogRef: MatDialogRef<TextDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TextPost,
    public textpostService: TextpostService,
    private adminService: AdminInformationService) {

    if (!data.id) {
      this.isNew = true;
      console.log("nichts da & es ist neu");
    } else {
      this.post = data;
      console.log("post" + this.post.title);
    }



    // Check if you are creating a new post

  }

  ngOnInit(): void {

    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdmin = value;
    });
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
        console.log("added Post");
      }
    }
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
