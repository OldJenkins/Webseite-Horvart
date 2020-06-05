import { Component, OnInit } from '@angular/core';
import { ImagePost } from '../models/ImagePost';
import { ImagepostService } from '../services/imagepost.service'; 


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  imagePost: ImagePost[];

  constructor(private imagePostService: ImagepostService) {}

  ngOnInit(): void {
    this.imagePostService.getImagePosts().subscribe(response => {
      this.imagePost = response;
    })
  }

}
