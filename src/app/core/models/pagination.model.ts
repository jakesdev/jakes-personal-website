export class PaginationModel {
  limit!: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  page!: number;

  public constructor(init?: Partial<PaginationModel>) {
    Object.assign(this, init);
  }
}

export const initialPagination: PaginationModel = {
  page: 1,
  limit: 10,
};
