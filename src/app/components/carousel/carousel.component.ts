import { Component, OnInit, Input } from '@angular/core';
import { ImagepostService } from 'src/app/services/imagepost.service';
import { ImagePost } from 'src/app/models/ImagePost';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  constructor(private picService: ImagepostService){ }

  @Input() images: ImagePost[];

  currentSlide = 0;

  ngOnInit(){
    this.picService.getImagePosts().subscribe(pics =>{
      this.images = pics;
    })
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.images.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.images.length ? 0 : next;
  }
}