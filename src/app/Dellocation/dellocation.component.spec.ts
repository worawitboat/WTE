import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dellocationComponent } from './dellocation.component';

describe('dellocationComponent', () => {
  let component: dellocationComponent;
  let fixture: ComponentFixture<dellocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dellocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dellocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
