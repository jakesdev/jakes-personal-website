export class UserProfileModel {
  page!: string;
  limit!: string;
  searchKey!: string;
  orderBy!: string;

  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
