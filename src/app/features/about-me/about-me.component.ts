import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppLayoutModule } from '../../shared/ui/layout';

@Component({
  standalone: true,
  selector: 'app-about-me',
  imports: [
    AppLayoutModule,
    CommonModule
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {}
