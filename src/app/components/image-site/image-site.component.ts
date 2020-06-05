import { Component, OnInit } from '@angular/core';
import { ImagePost } from'../../models/ImagePost';
import { ImagepostService } from 'src/app/services/imagepost.service';

@Component({
  selector: 'app-image-site',
  templateUrl: './image-site.component.html',
  styleUrls: ['./image-site.component.css']
})
export class ImageSiteComponent implements OnInit {

  imageposts: ImagePost[];
  editState: boolean = false;
  imagepostToEdit: ImagePost;

  constructor(private imagepostService: ImagepostService) { }

  ngOnInit(): void {
    this.imagepostService.getImagePosts().subscribe(images => {
      this.imageposts = images;
    });
  }

  deleteItem(event, imagepost: ImagePost){
    this.closeItem();
    this.imagepostService.deleteImagepost(imagepost);
  }

  editItem(event, textpost: ImagePost){
    this.editState = true;
    this.imagepostToEdit = textpost;
  }

  updateImagepost(imagepost: ImagePost){
    this.imagepostService.updateImagepost(imagepost);
    this.closeItem();
  }

  closeItem(){
    this.editState = false;
  }


}
