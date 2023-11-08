import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenContainerComponent } from 'src/app/components/screen-container/screen-container.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ApplicationComponent } from 'src/app/components/application/application.component';
import { Showcase, jaxsShowcase } from 'src/app/model/showcase';

@Component({
  selector: 'jax-personal-screen',
  standalone: true,
  imports: [CommonModule, ScreenContainerComponent, ApplicationComponent, AnimateOnScrollModule],
  templateUrl: './personal-screen.component.html',
  styleUrls: ['./personal-screen.component.scss']
})
export class PersonalScreenComponent {
  applications: Showcase[] = jaxsShowcase;
}
