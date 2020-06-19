import { Component, OnInit } from '@angular/core';
import { ImagePost } from '../../models/ImagePost';
import { ImagepostService } from '../../services/imagepost.service';
import { AdminInformationService } from 'src/app/services/admin-information.service';
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


  constructor(private imagePostService: ImagepostService,
    private adminService: AdminInformationService,
    public dialog: MatDialog,
    public cardDialog: MatDialog) { }


  ngOnInit(): void {

    // Initialize all Services
    this.imagePostService.getImagePosts().subscribe(response => {
      this.imagePost = response;
    });
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdminLoggedIn = value;
    });
  }


  onAddPicToCarouselClicked() {
    //Open the View Dialog
    this.dialog.open(DialogComponent, {
      data: { isNew: true }
    });
  }

  onCardClick(post: ImagePost) {
    if (this.isAdminLoggedIn) {

      // Open Dialog for the Logged in Admin user
      this.dialog.open(DialogComponent, {
        data: { id: post.id, title: post.title, path: post.path }
      });
    } else {

      // Open Dialog for a Guest User
      this.cardDialog.open(CardComponent, {
        data: { id: post.id, title: post.title, path: post.path }
      });
    }
  }
}