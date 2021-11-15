import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { AdminBlogComponent } from './admin-blog.component';
import { AdminBlogDetailComponent } from './containers/admin-blog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminBlogComponent,
      },
      {
        path: ':id',
        component: AdminBlogDetailComponent,
      },
    ]),
  ],
  declarations: [
    AdminBlogComponent,
  ]
})
export class AnalyticModule {}
