import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { editlocationComponent } from './editlocation.component';

describe('editlocationComponent', () => {
  let component: editlocationComponent;
  let fixture: ComponentFixture<editlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ editlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(editlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
