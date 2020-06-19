import { Component, OnInit } from '@angular/core';
import { ImagePost } from '../../models/ImagePost';
import { ImagepostService } from '../../services/imagepost.service';
import { AdminInformationService } from 'src/app/services/admin-information.service';
import { disableDebugTools } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  imagePost: ImagePost[];
  isAdminLoggedIn: boolean;


  constructor(private imagePostService: ImagepostService, private adminService: AdminInformationService, public dialog: MatDialog, public cardDialog: MatDialog) {


  }

  ngOnInit(): void {
    this.imagePostService.getImagePosts().subscribe(response => {
      this.imagePost = response;
    });
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdminLoggedIn = value;
    });
  }


  onAddPicToCarouselClicked() {
    this.dialog.open(DialogComponent, {
      data: { isNew: true }
    });
  }




  onCardClick(post: ImagePost) {
    if (this.isAdminLoggedIn) {
      this.dialog.open(DialogComponent, {
        data: { id: post.id, title: post.title, path: post.path }
      });
    } else {
      this.cardDialog.open(CardComponent, {
        data: { id: post.id, title: post.title, path: post.path }
      });
    }
  }
}