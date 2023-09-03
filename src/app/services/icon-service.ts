import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  public registerIcons(): void {
    this.loadIcons(Object.values(Icons), '../../assets/icons');
  }

  private loadIcons(iconKeys: string[], iconUrl: string): void {
    iconKeys.forEach(key => {
      this.matIconRegistry.addSvgIcon(key, this.domSanitizer.bypassSecurityTrustResourceUrl(`${iconUrl}/${key}.svg`));
    });
  }
}

export enum Icons {
  GitHub = 'github',
  Gmail = 'gmail',
  LinkedIn = 'linkedin',
  CSS = 'css',
  HTML = 'html',
  JS = 'javascript',
  Rose = 'rose',
  Quarkus = 'quarkus',
  Angular = 'angular',
  SpringBoot = 'spring'
}