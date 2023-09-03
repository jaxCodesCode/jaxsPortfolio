import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'jax-sidenav-link',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss']
})
export class SidenavLinkComponent {
  @Input()
  displayText!: string;

  @Input()
  icon!: string;

  @Input()
  route!: string;

  drawer: MatDrawer;

  constructor(private readonly router: Router, drawer: MatDrawer) {
    this.drawer = drawer;
  }

  navigate = () => {
    this.router.navigate([this.route]);
    this.drawer.close();
  }
}
