import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './containers/article-detail/article-detail.component';
import { ArticleListComponent } from './containers/article/article-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    pathMatch: 'prefix',
    redirectTo: '',
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: ':url',
        component: ArticleDetailComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
