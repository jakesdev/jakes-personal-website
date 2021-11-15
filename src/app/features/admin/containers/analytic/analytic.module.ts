import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AnalyticComponent } from './analytic.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    SkeletonModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnalyticComponent,
      },
    ]),
  ],
  declarations: [
    AnalyticComponent,
  ]
})
export class AnalyticModule {}
