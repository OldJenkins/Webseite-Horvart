import { TestBed } from '@angular/core/testing';

import { AdminInformationService } from './admin-information.service';

describe('AdminInformationService', () => {
  let service: AdminInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
