import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { AppRoute } from 'src/app/app-routing.module';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated().pipe(
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigate([`/${AppRoute.Auth}`]);
        }
      })
    );
  }
}
