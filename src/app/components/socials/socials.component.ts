import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SocialLinkComponent } from '../social-link/social-link.component';


@Component({
  selector: 'jax-socials',
  standalone: true,
  imports: [CommonModule, MatIconModule, SocialLinkComponent],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent {
  
  openEmail = () => {
    const windowRef = window.open(`mailto:jaxonhoffman@gmail.com`, '_blank');

    windowRef?.focus();

    setTimeout(function(){
      if(!windowRef?.document.hasFocus()) {
          windowRef?.close();
      }
    }, 500);
  }
}
