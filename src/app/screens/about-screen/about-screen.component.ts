import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDrawerComponent } from 'src/app/components/portfolio-drawer/portfolio-drawer.component';
import { AboutCardComponent } from 'src/app/components/about-card/about-card.component';
import { AboutCardMode } from 'src/app/model/enums';
import { IconButtonComponent } from 'src/app/components/icon-button/icon-button.component';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'jax-about-screen',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTabsModule, MatSidenavModule, MatIconModule, PortfolioDrawerComponent, AboutCardComponent, IconButtonComponent],
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.scss']
})
export default class AboutScreenComponent implements OnInit {
  AboutEnum = AboutCardMode;
  showFiller = false;

  textMap = new Map<string, string>();

  constructor(private readonly router: Router) {

  }

  ngOnInit(): void {
    this.textMap.set('intro', 'Thanks for checking out my portfolio! My name is Jax (short for Jaxon), and I\'m glad you\'ve made it. I\'ve just turned 25, and turned over my third year of experience writing software for one of the largest auto manufacturers in the country.')
    this.textMap.set('personal', 'I\'ve got a real passion for software, but my real love lies in my little family. This is my fiance, doing what we love most, hiking through the Arizona mountains. We are both from the midwest, so we find the Arizona geography facinating.')
    this.textMap.set('dogs', 'We\'ve got no little ones yet, but these are our \'kids\'! Say hi to Maverik, and Tobias! There is no shortage of excitement with these two running around. Their favorite activities involve anything in the water; swimming in the pool, floating down the river, they don\'t care if there\'s water!');
    this.textMap.set('code', 'Anyway, back to software. I began coding in my sophomore year in high school, doing a bit of html, JS, and CSS on CodeAcademy, then took AP CompSci my senior year (the only AP test I passed). After high school, I began to study at Rose-Hulman Institute of Technology.');
    this.textMap.set('school', 'I began studying computer engineering, but soon realized I had a larger attraction to software than electrical components, and switched majors to software engineering. My academia included some seriously robust courses, exposing me to all sorts of topics in software.');
    this.textMap.set('work', 'Despite that, I had little exposure to web development before joining General Motors upon my graduation. In my three years at GM, I built full-stack web applications, and supported their full lifecycle; from requirements to secure production releases.')
  }

  getText = (key: string) => {
    if (this.textMap.has(key))
      return this.textMap.get(key);
    else
      return '';  
  }

  navigateToTouchScreen = () => {
    this.router.navigate(['portfolio', 'get-in-touch']);
  }
}
