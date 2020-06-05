import { TestBed } from '@angular/core/testing';

import { ImagepostService } from './imagepost.service';

describe('ImagepostService', () => {
  let service: ImagepostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagepostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
