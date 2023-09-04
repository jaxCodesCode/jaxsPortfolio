import { Component, TemplateRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jax-screen-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-container.component.html',
  styleUrls: ['./screen-container.component.scss']
})
export class ScreenContainerComponent {
  @Input()
  header!: string;

  @Input()
  content!: TemplateRef<Component>;
}
