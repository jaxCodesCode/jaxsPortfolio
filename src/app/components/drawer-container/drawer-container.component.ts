import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDrawerComponent } from 'src/app/components/portfolio-drawer/portfolio-drawer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutScreenComponent } from 'src/app/screens/about-screen/about-screen.component';
import { EducationalScreenComponent } from 'src/app/screens/educational-screen/educational-screen.component';
import { ProfessionalScreenComponent } from 'src/app/screens/professional-screen/professional-screen.component';
import { TouchScreenComponent } from 'src/app/screens/touch-screen/touch-screen.component';
import { ScrollSnapService } from 'src/app/services/scroll-snap/scroll-snap.service';
import { PersonalScreenComponent } from 'src/app/screens/personal-screen/personal-screen.component';

@Component({
  selector: 'jax-drawer-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, 
    PortfolioDrawerComponent, RouterModule, AboutScreenComponent, 
    ProfessionalScreenComponent, 
    EducationalScreenComponent, 
    PersonalScreenComponent,
    TouchScreenComponent],
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss'],
})
export class DrawerContainerComponent implements AfterViewInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private readonly scrollSnapService: ScrollSnapService
  ) { }

  ngAfterViewInit(): void {
    this.scrollSnapService.registerElement('about', document.getElementById('about'))
    this.scrollSnapService.registerElement('professional', document.getElementById('professional'))
    this.scrollSnapService.registerElement('educational', document.getElementById('educational'))
    this.scrollSnapService.registerElement('personal', document.getElementById('personal'))
    this.scrollSnapService.registerElement('touch', document.getElementById('touch'))   
  }

  closeDrawer = () => {
    if (this.drawer)
      this.drawer.close();
  }

  goToLanding = () => {
    this.closeDrawer();
    this.scrollSnapService.scrollToElement('landing');
  }
}
