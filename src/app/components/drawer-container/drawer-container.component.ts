import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDrawerComponent } from 'src/app/components/portfolio-drawer/portfolio-drawer.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UtilService } from 'src/app/services/util/util.service';
import { AnimationService } from 'src/app/services/animation/animation.service';
import { slideInAnimation } from 'src/app/route-animation';

@Component({
  selector: 'jax-drawer-container',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, 
    PortfolioDrawerComponent, RouterModule],
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss'],
  animations: [ slideInAnimation ]
})
export class DrawerContainerComponent {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private readonly router: Router, 
    private readonly utilService: UtilService, 
    private readonly animationService: AnimationService
  ) { }

  closeDrawer = () => {
    if (this.drawer)
      this.drawer.close();
  }

  getRouteAnimationData(outlet: RouterOutlet) {
    return this.animationService.getRouteAnimationData(outlet);
  }
}
