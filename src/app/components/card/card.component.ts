import { Component, OnInit, Inject } from '@angular/core';
import { ImagePost } from '../../models/ImagePost';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagepostService } from '../../services/imagepost.service';
import { AdminInformationService } from 'src/app/services/admin-information.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  clickedImage: ImagePost;
  isAdminUser: boolean = false;
  isAuthUser: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImagePost,
    private imagePostService: ImagepostService,
    public dialogRef: MatDialogRef<CardComponent>,
    private adminInfoService: AdminInformationService) {

    this.clickedImage = data;

  }

  ngOnInit(): void {

    // Get Admin Status from Admin Service
    this.adminInfoService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdminUser = value;
    });

    // Get Login Status
    this.adminInfoService.getIsUserLoggedIn().subscribe(value => {
      this.isAuthUser = value;
    });
  }
}