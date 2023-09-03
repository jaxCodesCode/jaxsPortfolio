import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDrawerComponent } from './portfolio-drawer.component';

describe('PortfolioDrawerComponent', () => {
  let component: PortfolioDrawerComponent;
  let fixture: ComponentFixture<PortfolioDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PortfolioDrawerComponent]
    });
    fixture = TestBed.createComponent(PortfolioDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
