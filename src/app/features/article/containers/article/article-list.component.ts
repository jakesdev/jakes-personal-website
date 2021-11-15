import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { ArticleResponse } from '../../../home/data/model/article.response';
import { ArticlesService } from '../../../home/data/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: ArticleResponse[] = [];

  constructor(private articleService: ArticlesService, private notificationService: NotificationService) {

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
          this.notificationService.error(err);
        }
      }
    );
  }


}
