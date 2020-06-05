import { TestBed } from '@angular/core/testing';

import { TextpostService } from './textpost.service';

describe('TextpostService', () => {
  let service: TextpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
