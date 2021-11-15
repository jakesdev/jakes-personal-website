import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analytic', // TODO: fix router later
      },
      {
        path: 'analytic',// TODO: fix router later
        canActivate: [],
        loadChildren: () =>
          import('./containers/analytic/analytic.module').then(
            (m) => m.AnalyticModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
