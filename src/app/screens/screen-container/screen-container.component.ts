import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDrawerComponent } from 'src/app/components/portfolio-drawer/portfolio-drawer.component';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'jax-screen-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, MatIconModule, PortfolioDrawerComponent, RouterModule],
  templateUrl: './screen-container.component.html',
  styleUrls: ['./screen-container.component.scss']
})
export class ScreenContainerComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private readonly router: Router) {

  }

  closeDrawer = () => {
    if (this.drawer)
      this.drawer.close();
  }
}
