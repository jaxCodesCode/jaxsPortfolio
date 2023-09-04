import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from 'src/app/components/under-construction/under-construction.component';
import { ScreenContainerComponent } from 'src/app/components/screen-container/screen-container.component';

@Component({
  selector: 'jax-professional-screen',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent, ScreenContainerComponent],
  templateUrl: './professional-screen.component.html',
  styleUrls: ['./professional-screen.component.scss']
})
export class ProfessionalScreenComponent {

}
