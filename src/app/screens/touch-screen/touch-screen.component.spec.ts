import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchScreenComponent } from './touch-screen.component';

describe('TouchScreenComponent', () => {
  let component: TouchScreenComponent;
  let fixture: ComponentFixture<TouchScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TouchScreenComponent]
    });
    fixture = TestBed.createComponent(TouchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
