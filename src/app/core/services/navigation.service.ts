import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  loginPage(): void {
    this.router.navigate([`auth/login`]);
  }

  defaultPage(): void {
    this.router.navigate([`/`]);
  }
}
