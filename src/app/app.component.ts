import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from './services/icon-service';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { TouchScreenComponent } from './screens/touch-screen/touch-screen.component';
import { ScrollSnapService } from './services/scroll-snap/scroll-snap.service';
import Aos from 'aos';
import { DrawerContainerComponent } from './components/drawer-container/drawer-container.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
    selector: 'jax-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      CommonModule, 
      LandingScreenComponent,
      DrawerContainerComponent,
      AnimateOnScrollModule 
    ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'jaxsPortfolio';

  @ViewChild('touch') touchElement!: TouchScreenComponent | Element;

  constructor(private iconService: IconService,
    private readonly scrollSnapService: ScrollSnapService) { }

  ngOnInit(): void {
    this.iconService.registerIcons();
    this.scrollSnapService.registerElement('landing', document.getElementById('landing'));
    history.scrollRestoration = 'manual'
    window.onunload = function () {
      window.scrollTo(0, 0);
    };
  }

  ngAfterViewInit(): void {
    Aos.init();
  }
}
