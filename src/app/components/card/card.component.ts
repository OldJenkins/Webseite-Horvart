import { Component, OnInit, Inject } from '@angular/core';
import { ImagePost } from '../../models/ImagePost';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagepostService } from '../../services/imagepost.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  clickedImage: ImagePost;
  isAdminUser: boolean = false;
  isAuthUser: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePost, private imagePostService: ImagepostService, public dialogRef: MatDialogRef<CardComponent>) {
    this.clickedImage = data;
  }

  ngOnInit(): void {



    /*
    this.imagePostService.getImagePosts().subscribe(response => {
      //this.imagePost = response;

      let image: ImagePost[];
      image = response;



    });
    */
  }
}