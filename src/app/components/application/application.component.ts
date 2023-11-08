import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Showcase } from 'src/app/model/showcase';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'jax-application',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, AnimateOnScrollModule],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {
  @Input() application!: Showcase;

  getImgUrl = () => {
    return './assets/images/' + this.application.photo;
  }

  openInNewTab = () => {
    const link = document.createElement('a');
    link.href = this.application.projectUrl;
    link.target = '_blank';
    link.click();
    link.remove();
  }
}
