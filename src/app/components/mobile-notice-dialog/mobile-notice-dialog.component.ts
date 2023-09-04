import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogContainerComponent } from '../dialog-container/dialog-container.component';

@Component({
  selector: 'jax-mobile-notice-dialog',
  standalone: true,
  imports: [CommonModule, DialogContainerComponent],
  templateUrl: './mobile-notice-dialog.component.html',
  styleUrls: ['./mobile-notice-dialog.component.scss']
})
export class MobileNoticeDialogComponent {
  constructor(public dialogRef: MatDialogRef<MobileNoticeDialogComponent>) {
    
  }
}
