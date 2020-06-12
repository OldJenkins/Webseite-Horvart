import { TestBed } from '@angular/core/testing';

import { CarouselImagePostService } from './carousel-image-post.service';

describe('CarouselImagePostService', () => {
  let service: CarouselImagePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselImagePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
