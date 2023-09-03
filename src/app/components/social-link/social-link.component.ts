import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'jax-social-link',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent {
  @Input()
  svg!: string;

  @Input()
  tooltip!: string;

  @Input()
  icon!: string;

  @Input()
  path!: string;

  @Output()
  click: EventEmitter<void> = new EventEmitter();
}
