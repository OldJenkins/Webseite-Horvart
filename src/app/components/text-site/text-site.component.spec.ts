import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSiteComponent } from './text-site.component';

describe('TextSiteComponent', () => {
  let component: TextSiteComponent;
  let fixture: ComponentFixture<TextSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
