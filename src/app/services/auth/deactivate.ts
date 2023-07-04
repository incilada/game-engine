import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppRoute } from 'src/app/app-routing.module';
import { MainComponent } from 'src/app/pages/main/component';

@Injectable()
export class CanDeactivateMain implements CanDeactivate<MainComponent> {
  constructor() {}

  canDeactivate(
    component: MainComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (nextState.url === `/${AppRoute.Auth}`) {
      return of(false);
    } else {
      return of(true);
    }
  }
}
