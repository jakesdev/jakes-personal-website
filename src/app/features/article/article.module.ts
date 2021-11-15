import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleBoxModule } from '../../shared/components/article-box/article-box.module';
import { AppLayoutModule } from '../../shared/ui/layout';
import { ArticlesService } from '../home/data/services/article.service';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticleDetailComponent } from './containers/article-detail/article-detail.component';
import { ArticleListComponent } from './containers/article/article-list.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    AppLayoutModule,
    ArticleBoxModule,
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticleModule { }
