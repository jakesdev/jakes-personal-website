import { PaginationModel } from './pagination.model';


export class PageDto<T> {
    readonly data: T[];

    readonly meta: PaginationModel;

    constructor(data: T[], meta: PaginationModel) {
        this.data = data;
        this.meta = meta;
    }
}
