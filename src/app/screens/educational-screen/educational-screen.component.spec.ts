import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalScreenComponent } from './educational-screen.component';

describe('EducationalScreenComponent', () => {
  let component: EducationalScreenComponent;
  let fixture: ComponentFixture<EducationalScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EducationalScreenComponent]
    });
    fixture = TestBed.createComponent(EducationalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
