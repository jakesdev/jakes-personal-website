import { SortDirection } from "@angular/material/sort";

export interface SearchFilterModel {
  searchKey?: string;

  isSolved?: boolean;
  startDate?: string;
  endDate?: string;

  createdAt?: string;

  page: number;

  limit: number;
}
export interface TableSortModel {
  sortType: SortDirection;
  sortBy: string;
}

export const initialFilter: SearchFilterModel = {
  page: 1,
  limit: 5,
  createdAt: "DESC",
};

export const initialSort: TableSortModel = {
  sortType: "desc",
  sortBy: "createdAt",
};
