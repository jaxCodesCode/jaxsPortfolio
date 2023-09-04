import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNoticeDialogComponent } from './mobile-notice-dialog.component';

describe('MobileNoticeDialogComponent', () => {
  let component: MobileNoticeDialogComponent;
  let fixture: ComponentFixture<MobileNoticeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MobileNoticeDialogComponent]
    });
    fixture = TestBed.createComponent(MobileNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
