import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSiteComponent } from './image-site.component';

describe('GridComponent', () => {
  let component: ImageSiteComponent;
  let fixture: ComponentFixture<ImageSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSiteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
