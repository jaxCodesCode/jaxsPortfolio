import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'jax-dialog-container',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent {

  constructor(private readonly dialogRef: MatDialogRef<Component>) {

  }

  @Input()
  header!: string;

  @Input()
  content!: TemplateRef<Component>;

  closeDialog = () => this.dialogRef.close();
}
