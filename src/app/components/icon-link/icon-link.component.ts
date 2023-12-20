import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'jax-icon-link',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent {
  @Input() href!: string;
  @Input() label!: string;
  @Input() iconSVG!: string;

  @ViewChild('anchor') anchor!: ElementRef;

  anchorLink = () => {
    this.anchor.nativeElement.click();
  }
}
