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

    this.post = data;
    // Check if you are creating a new post
    if (!data.id) {
      this.isNew = true;

      console.log("nichts da & es ist neu");
    } else {
      this.post = data;
      console.log("post" + this.post.title);
    }

  }

  ngOnInit(): void {



    // Get Current Admin State
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
    //something has changed
  }

  save() {

    if (!this.isNew) {

      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {
        //something has changed
        this.textpostService.updateTextpost(this.post);

      }
    } else {
      console.log("trying to save");
      //Only make you update query if something really has changes, to minimize server usage
      if (this.someThingChanged) {


        //something has changed
        this.post.timestamp = Date.now();
        this.textpostService.addTextPost(this.post);
        console.log("added Post");
      }
    }
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
