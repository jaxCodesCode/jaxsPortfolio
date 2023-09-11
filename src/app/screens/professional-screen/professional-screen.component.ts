import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenContainerComponent } from 'src/app/components/screen-container/screen-container.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Recognition, jaxsRecognitions } from 'src/app/model/recognition';
import { Project, jaxsProjects } from 'src/app/model/project';
import { Job, jaxsJobs } from 'src/app/model/job';

@Component({
  selector: 'jax-professional-screen',
  standalone: true,
  imports: [CommonModule, ScreenContainerComponent, MatIconModule, MatStepperModule, NgbCarouselModule],
  templateUrl: './professional-screen.component.html',
  styleUrls: ['./professional-screen.component.scss']
})
export class ProfessionalScreenComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  jobs: Job[] = jaxsJobs;
  recognitions: Recognition[] = jaxsRecognitions;

  currentSlideId = 0;

  ngAfterViewInit(): void {
      this.carousel.pause()
  }

  updateSlideNumber = (slidEvent: NgbSlideEvent) => {
    this.currentSlideId = parseInt(slidEvent.current.substring(slidEvent.current.length - 1));
  }
}
