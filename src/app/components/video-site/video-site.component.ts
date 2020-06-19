import { Component, OnInit } from '@angular/core';
import { VideoPost } from '../../models/VideoPost';
import { VideopostService } from 'src/app/services/videopost.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { AdminInformationService } from '../../services/admin-information.service';

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

  isAdmin: boolean;

  constructor(private videoPostService: VideopostService, public dialog: MatDialog, private adminService: AdminInformationService,) {

  }

  ngOnInit(): void {
    this.videoPostService.getVideoPosts().subscribe(response => {
      this.videoPosts = response;
    });

    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdmin = value;
    })
  }

  deleteItem(event, videopost: VideoPost) {
    this.closeItem();
    this.videoPostService.deleteVideopost(videopost);
  }

  editItem(event, videopost: VideoPost) {
    this.editState = true;
    this.videoPostToEdit = videopost;
  }

  updateVideoPost(videopost: VideoPost) {
    this.videoPostService.updateVideopost(videopost);
    this.closeItem();
  }

  closeItem() {
    this.editState = false;
  }


  openDialogChangeItem(post: VideoPost) {
    this.dialog.open(VideoDialogComponent, {
      data: { id: post.id, title: post.title, path: post.path }
    });
  }

  openDialogNewItem() {
    this.dialog.open(VideoDialogComponent, {
      data: {}
    });
  }

}
