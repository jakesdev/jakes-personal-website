import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appConfig } from './core/constants';
import { AdminGuard, IsLoggedInGuard } from './core/guards';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { ErrorComponent } from './features/error/error.component';
import { HomeComponent } from './features/home/home.component';
import { TestFeatureComponent } from './features/test-feature/test-feature.component';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [IsLoggedInGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: appConfig.routes.aboutMe.index,
    component: AboutMeComponent
  },
  {
    path: appConfig.routes.article.index,
    loadChildren: () =>
      import('./features/article/article.module').then((m) => m.ArticleModule)
  },
  {
    path: appConfig.routes.admin.index,
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: 'test-feature',
    component: TestFeatureComponent
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
