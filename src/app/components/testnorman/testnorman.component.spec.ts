import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestnormanComponent } from './testnorman.component';

describe('TestnormanComponent', () => {
  let component: TestnormanComponent;
  let fixture: ComponentFixture<TestnormanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestnormanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestnormanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
