import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavLinkComponent } from './../sidenav-link/sidenav-link.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'jax-portfolio-drawer',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavLinkComponent],
  templateUrl: './portfolio-drawer.component.html',
  styleUrls: ['./portfolio-drawer.component.scss']
})
export class PortfolioDrawerComponent {
  drawer: MatDrawer;

  constructor(private readonly router: Router, drawer: MatDrawer) {
    this.drawer = drawer;
  }

  closeDrawer() {
    if (this.drawer)
      this.drawer.close();
  }
}
