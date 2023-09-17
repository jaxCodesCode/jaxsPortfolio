import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDrawerComponent } from 'src/app/components/portfolio-drawer/portfolio-drawer.component';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'jax-drawer-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, 
    PortfolioDrawerComponent, RouterModule],
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss']
})
export class DrawerContainerComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private readonly router: Router, 
    private readonly utilService: UtilService
  ) { }

  closeDrawer = () => {
    if (this.drawer)
      this.drawer.close();
  }
}
