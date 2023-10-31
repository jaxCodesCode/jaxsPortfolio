import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconService } from './services/icon-service';
import { slideInAnimation } from './route-animation';
import { AnimationService } from './services/animation/animation.service';

@Component({
    selector: 'jax-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  title = 'jaxsPortfolio';

  constructor(private iconService: IconService, private readonly animationService: AnimationService) { }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }

  getRouteAnimationData(outlet: RouterOutlet) {
    return this.animationService.getRouteAnimationData(outlet);
  }
}
