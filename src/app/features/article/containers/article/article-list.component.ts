import { Component, OnInit } from "@angular/core";
import { PaginationModel, SearchFilterModel } from "../../../../core/models";
import { NotificationService } from "../../../../core/services/notification.service";
import { ArticleResponse } from "../../../home/data/model/article.response";
import { ArticlesService } from "../../../home/data/services/article.service";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"],
})
export class ArticleListComponent implements OnInit {
  articles: ArticleResponse[] = [];
  pageOption = new PaginationModel();
  searchFilter: SearchFilterModel = {
    page: 1,
    limit: 5,
    createdAt: "DESC",
  };

  constructor(
    private articleService: ArticlesService,
    private notificationService: NotificationService
  ) {}
  ngOnInit() {
    this.getArticles(this.searchFilter);
  }

  getArticles(filter: SearchFilterModel) {
    this.articleService.getArticles(filter).subscribe({
      next: (el) => {
        this.articles = el.data;
        this.pageOption = el.meta;
      },
      error: (err) => {
        this.notificationService.error(err);
      },
    });
  }

  onChangePagination(event: any) {
    this.searchFilter.page = event.page;
    this.getArticles(this.searchFilter);
  }
}
