import { Component, TemplateRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'jax-screen-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen-container.component.html',
  styleUrls: ['./screen-container.component.scss']
})
export class ScreenContainerComponent {
  @Input()
  header!: TemplateRef<Component>;

  @Input()
  content!: TemplateRef<Component>;
}
