export interface PaginationModel {
  limit: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  page: number;
}

export const initialPagination: PaginationModel = {
  page: 1,
  limit: 10,
};
