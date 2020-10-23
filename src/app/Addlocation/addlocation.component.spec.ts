import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addlocationComponent } from './addlocation.component';

describe('addlocationComponent', () => {
  let component: addlocationComponent;
  let fixture: ComponentFixture<addlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
