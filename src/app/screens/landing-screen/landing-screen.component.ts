import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MobileNoticeDialogComponent } from 'src/app/components/mobile-notice-dialog/mobile-notice-dialog.component';
import { UtilService } from 'src/app/services/util/util.service';
import { SocialsComponent } from 'src/app/components/socials/socials.component';
import { TechStackComponent } from 'src/app/components/tech-stack/tech-stack.component';

@Component({
  selector: 'jax-landing-screen',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, TechStackComponent],
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private readonly router: Router, 
    private readonly utilService: UtilService
  ) { }

  ngOnInit(): void {
    if (this.utilService.deviceIsMobile()) {
      this.dialog.open(MobileNoticeDialogComponent)
    }
  }

  enterPortfolio = () => {
    this.router.navigate(['portfolio', 'about']);
  }
}
