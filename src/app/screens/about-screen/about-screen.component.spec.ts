import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScreenComponent } from './about-screen.component';

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
  let fixture: ComponentFixture<HomeScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeScreenComponent]
    });
    fixture = TestBed.createComponent(HomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
