import { ApplicationRef, Injectable } from '@angular/core';
import Aos from 'aos';

@Injectable({
  providedIn: 'root'
})
export class ScrollSnapService {

  private elementMap = new Map<string, Element>();

  constructor(private readonly applicationRef: ApplicationRef) { }

  registerElement = (key: string, element: HTMLElement | null) => {
    
    if (!element) return;
    if(!this.elementMap.has(key)) {
          
      this.elementMap.set(key, element);
    }
  }

  scrollToElement = (key: string) => {
    this.elementMap.get(key)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.applicationRef.tick()
  }

  scrollToElementWithOffset = (key: string, offset: number) => {
    const element = this.elementMap.get(key); 
    if (element) {
      const yPos = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: yPos, behavior: 'smooth' });
      this.applicationRef.tick()

    }
  }
}
