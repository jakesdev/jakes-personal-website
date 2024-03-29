import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService, NavigationService } from '../services';
@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private helper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;

    if (currentUser?.user?.role === 'ADMIN') {
      const isRefreshTokenExpired = this.helper.isTokenExpired(currentUser.token.refreshToken);
      if (isRefreshTokenExpired) {
        this.authService.logout();
        return false;
      }

      return true;
    }
    this.navigationService.loginPage();
    return false;
  }
}
