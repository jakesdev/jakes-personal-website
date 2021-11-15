import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  headerMenu = false;
  blogMenu = false;

  year = 0;
  constructor(
  ) {
    const currentDate = new Date();
    this.year = currentDate.getFullYear()
  }
}
