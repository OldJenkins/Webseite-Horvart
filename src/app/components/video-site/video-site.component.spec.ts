import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSiteComponent } from './video-site.component';

describe('VideoSiteComponent', () => {
  let component: VideoSiteComponent;
  let fixture: ComponentFixture<VideoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
