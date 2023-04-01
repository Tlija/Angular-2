import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudientComponent } from './add-studient.component';

describe('AddStudientComponent', () => {
  let component: AddStudientComponent;
  let fixture: ComponentFixture<AddStudientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
