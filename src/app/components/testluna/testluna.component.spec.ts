import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlunaComponent } from './testluna.component';

describe('TestlunaComponent', () => {
  let component: TestlunaComponent;
  let fixture: ComponentFixture<TestlunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
