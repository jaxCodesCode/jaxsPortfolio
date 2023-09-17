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
    if( !window.location.hash && window.addEventListener ){
      window.addEventListener("load", function() {
          setTimeout(function(){
              window.scrollTo(0, 0);
          }, 0);
      });
      window.addEventListener( "orientationchange",function() {
          setTimeout(function(){
              window.scrollTo(0, 0);
          }, 0);
      });
  }
  }

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
