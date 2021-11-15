import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {

  url: string;
  constructor(
    private route: ActivatedRoute
  ) {
    this.url = this.route.snapshot.params['url'];
  }
}
