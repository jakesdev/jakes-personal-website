import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from '../../shared/components/breadcrumb/breadcrumb.module';
import { AdminLayoutModule } from '../../shared/ui/layout';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminLayoutModule,
    BreadcrumbModule,
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule {}
