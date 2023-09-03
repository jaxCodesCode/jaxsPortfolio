import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconService } from './services/icon-service';

@Component({
    selector: 'jax-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'jaxsPortfolio';

  constructor(private iconService: IconService) {

  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
