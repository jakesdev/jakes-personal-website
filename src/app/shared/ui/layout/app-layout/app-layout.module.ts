import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const COMPONENTS = [
  AppLayoutComponent
];

const MODULES = [
  CommonModule,
  RouterModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES],
})
export class AppLayoutModule {}
