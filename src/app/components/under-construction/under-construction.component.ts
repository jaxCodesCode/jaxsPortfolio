import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'jax-under-construction',
  standalone: true,
  imports: [CommonModule, MatIconModule, IconButtonComponent],
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent {

  constructor(private readonly router: Router) {
    
  } 

  navigateToTouchScreen = () => {
    this.router.navigate(['portfolio', 'get-in-touch']);
  }
}
