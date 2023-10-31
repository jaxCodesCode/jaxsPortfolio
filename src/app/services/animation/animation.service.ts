import { Injectable } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation']['value'];
  }
}
