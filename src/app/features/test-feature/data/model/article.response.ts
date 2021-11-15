export class ArticleResponse {
  title!: string;
  description!: string;
  slug!: string;
  createdAt!: Date;

  public constructor(init?: Partial<ArticleResponse>) {
    Object.assign(this, init);
  }
}
