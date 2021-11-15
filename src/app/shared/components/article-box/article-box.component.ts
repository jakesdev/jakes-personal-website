import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-box',
  templateUrl: './article-box.component.html',
  styleUrls: ['./article-box.component.scss']
})
export class ArticleBoxComponent {

  @Input() title = '';
  @Input() description = '';
  @Input() slug = '';
  @Input() createdAt = new Date();
}
