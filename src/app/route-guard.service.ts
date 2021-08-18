import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private _router: Router, private _appService: AppService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let token = this._appService.getCookie("token");
    if (!token) {
      this._router.navigate(['/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      })
      return false
    } else {
      return true
    }
  }
}
