import { Component, OnInit } from '@angular/core';
import { VideoPost } from'../../models/VideoPost';
import { VideopostService } from 'src/app/services/videopost.service';


@Component({
  selector: 'app-video-site',
  templateUrl: './video-site.component.html',
  styleUrls: ['./video-site.component.css']
})
export class VideoSiteComponent implements OnInit {

    //isAdmin: boolean = true;

    videoPosts: VideoPost[];
    editState: boolean = false;
    videoPostToEdit: VideoPost;

    isAdmin:boolean;
  
    constructor(private videoPostService: VideopostService) { }
  
    ngOnInit(): void {
      this.videoPostService.getVideoPosts().subscribe(response => {
        this.videoPosts = response;
      });
    }
  
    deleteItem(event, videopost: VideoPost){
      this.closeItem();
      this.videoPostService.deleteVideopost(videopost);
    }
  
    editItem(event, videopost: VideoPost){
      this.editState = true;
      this.videoPostToEdit = videopost;
    }
  
    updateVideoPost(videopost: VideoPost){
      this.videoPostService.updateVideopost(videopost);
      this.closeItem();
    }
  
    closeItem(){
      this.editState = false;
    }
  
}
