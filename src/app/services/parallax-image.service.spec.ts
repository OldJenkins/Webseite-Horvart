import { TestBed } from '@angular/core/testing';

import { ParallaxImageService } from './parallax-image.service';

describe('ParallaxImageService', () => {
  let service: ParallaxImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParallaxImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
