import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondgridComponent } from './secondgrid.component';

describe('SecondgridComponent', () => {
  let component: SecondgridComponent;
  let fixture: ComponentFixture<SecondgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
