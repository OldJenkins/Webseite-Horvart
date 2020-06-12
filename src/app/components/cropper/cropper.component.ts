import { Component, OnInit, ViewChild } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { AdminInformationService } from 'src/app/services/admin-information.service';


@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements OnInit {

  constructor(private adminService: AdminInformationService) {
  }

  ngOnInit(): void {
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.administrator = value;
    })
  }

  administrator: boolean = true;
  showCropper = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  //Lex rettet die Welt
  canvasRotation = 0;
  transform: ImageTransform = {};
  rotation = 0;
  scale = 1;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    //show message
  }

  onSaveToCarousel() {
    //Hier kommt der Insert an den Ort, wo die Bilder später liegen sollen
    //Die Variable die du dafür benutzt musst heißt this.croppedImage
    console.log("Hallo")
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
    console.log("yeay?");
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }
}

