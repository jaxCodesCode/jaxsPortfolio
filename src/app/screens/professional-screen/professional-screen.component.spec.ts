import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalScreenComponent } from './professional-screen.component';

describe('ProfessionalScreenComponent', () => {
  let component: ProfessionalScreenComponent;
  let fixture: ComponentFixture<ProfessionalScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfessionalScreenComponent]
    });
    fixture = TestBed.createComponent(ProfessionalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
