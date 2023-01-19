import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  constructor(
    private authService: AuthService,
  ) {

  }
  sideBar = false;
  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {
    this.authService.logout()
  }
}
