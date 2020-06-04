import { TestBed } from '@angular/core/testing';

import { VideopostService } from './videopost.service';

describe('VideopostService', () => {
  let service: VideopostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideopostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
