import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const COMPONENTS = [
  AdminLayoutComponent
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
export class AdminLayoutModule {}
