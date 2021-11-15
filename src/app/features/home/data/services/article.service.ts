import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageDto } from '../../../../core/models/page.dto';
//
import { ApiService } from '../../../../core/services';
import { ArticleResponse } from '../model/article.response';

@Injectable({
	providedIn: 'root',
})
export class ArticlesService {
	constructor(
		private apiServices: ApiService,
	) {}

	getArticles(query: any): Observable<PageDto<ArticleResponse>> {
		return this.apiServices.get<PageDto<ArticleResponse>>(`articles`, query);
	}
}
