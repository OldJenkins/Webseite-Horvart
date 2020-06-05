import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmarcelComponent } from './testmarcel.component';

describe('TestmarcelComponent', () => {
  let component: TestmarcelComponent;
  let fixture: ComponentFixture<TestmarcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmarcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmarcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
