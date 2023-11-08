import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavLinkComponent } from './../sidenav-link/sidenav-link.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ScrollSnapService } from 'src/app/services/scroll-snap/scroll-snap.service';

@Component({
  selector: 'jax-portfolio-drawer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavLinkComponent],
  templateUrl: './portfolio-drawer.component.html',
  styleUrls: ['./portfolio-drawer.component.scss']
})
export class PortfolioDrawerComponent {
  drawer: MatDrawer;

  constructor(private readonly router: Router, drawer: MatDrawer, private readonly scrollSnapService: ScrollSnapService) {
    this.drawer = drawer;
  }

  closeDrawer() {
    if (this.drawer)
      this.drawer.close();
  }

  goToLanding(): void {
    // this.router.navigate(['']);
    this.closeDrawer();
    this.scrollSnapService.scrollToElement('landing');
  }
}
