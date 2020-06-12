import { Component, OnInit } from '@angular/core';
import { ImagePost } from '../../models/ImagePost';
import { ImagepostService } from '../../services/imagepost.service';
import { AdminInformationService } from 'src/app/services/admin-information.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  imagePost: ImagePost[];
  isAdminLoggedIn: boolean = false;


  constructor(private imagePostService: ImagepostService, private adminService: AdminInformationService) { }

  ngOnInit(): void {
    this.imagePostService.getImagePosts().subscribe(response => {
      this.imagePost = response;
    });
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdminLoggedIn = value;
    });
  }


  onAddPicToCarouselClicked() {

  }
}
