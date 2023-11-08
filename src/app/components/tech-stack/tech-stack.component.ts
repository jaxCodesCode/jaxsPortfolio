import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinkComponent } from '../social-link/social-link.component';

@Component({
  selector: 'jax-tech-stack',
  standalone: true,
  imports: [CommonModule, SocialLinkComponent],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {

}
