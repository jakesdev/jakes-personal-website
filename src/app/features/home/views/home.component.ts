import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { AppLayoutModule } from '../../shared/ui/layout';
import { ArticleResponse } from './data/model/article.response';
import { ArticlesService } from './data/services/article.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    AppLayoutModule,
    PipesModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    ArticlesService,
    NotificationService
  ]
})
export class HomeComponent implements OnInit {

  yearsOld = 0;

  articles: ArticleResponse[] = [];
  constructor(
    private articleService: ArticlesService,
    private notificationService: NotificationService
  ) {
    const currentDate = new Date();

    this.yearsOld = currentDate.getFullYear() - 1998;
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles({}).subscribe(
      {
        next: (el) => {
          this.articles = el.data;
        },
        error: (err) => {
          this.notificationService.error(err)
        }
      }
    );
  }
}
