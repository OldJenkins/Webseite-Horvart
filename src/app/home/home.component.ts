import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize'
import { AdminInformationService } from '../services/admin-information.service';
import { ParallaxImageService } from '../services/parallax-image.service';
import { ParallaxImagePost } from '../models/ParallaxImagePost';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isAdminLoggedIn: boolean = false;
  images: ParallaxImagePost[];

  constructor(private adminService: AdminInformationService, private parallaxService: ParallaxImageService) { }

  @ViewChild('parallax') parallax: ElementRef;
  @ViewChild('parallax2') parallax2: ElementRef;



  ngOnInit(): void {
    this.adminService.getIsAdminLoggedIn().subscribe(value => {
      this.isAdminLoggedIn = value;
    })

    this.parallaxService.getParallaxImagePost().subscribe(pics => {
      this.images = pics;
      console.log("bilder geladen");
      console.log(this.images);
    })
  }

  ngAfterViewInit() {
    let instanceParallax = new M.Parallax(this.parallax.nativeElement, {});
    let instanceParallax2 = new M.Parallax(this.parallax2.nativeElement, {});
  }

  onEditParallaxPictureClicked(index: number) {
    console.log("yeay?");
  }


}