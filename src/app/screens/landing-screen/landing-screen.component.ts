import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TechStackComponent } from 'src/app/components/tech-stack/tech-stack.component';
import { ScrollSnapService } from 'src/app/services/scroll-snap/scroll-snap.service';
import { SocialLinkComponent } from 'src/app/components/social-link/social-link.component';
import { UtilService } from 'src/app/services/util/util.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MobileNoticeDialogComponent } from 'src/app/components/mobile-notice-dialog/mobile-notice-dialog.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AnimateModule } from 'primeng/animate'

@Component({
  selector: 'jax-landing-screen',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, TechStackComponent, SocialLinkComponent, AnimateOnScrollModule, AnimateModule],
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent implements OnInit {

  constructor(private readonly scrollSnapService: ScrollSnapService,
            private readonly utilService: UtilService,
            public dialog: MatDialog)
  {

  }

 ngOnInit(): void {
   if (this.utilService.deviceIsMobile()) {
     this.dialog.open(MobileNoticeDialogComponent)
   } 
 }

  enterPortfolio = () => {
    this.scrollSnapService.scrollToElement('about');
  }
}
