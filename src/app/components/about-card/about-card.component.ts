import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCardMode } from 'src/app/model/enums';

@Component({
  selector: 'jax-about-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {
  @Input()
  mode!: AboutCardMode;

  @Input()
  photo!: string;

  @Input()
  text!: string | undefined;

  @Input()
  component!: TemplateRef<Component> | null;

  isLeftMode = () =>  this.mode === AboutCardMode.left;

  getImgUrl = () => {
    if (this.photo)
      return './assets/images/' + this.photo + '.jpg';
    else
      return undefined;
  };
}
