
export class UserInfoModel {
  id!: string;
  email!: string;
  createdAt!: string;
  isSubscription!: boolean;
  url?: string;
  widget?: number;

  brandId?: string;
  geography?: Geography;

  public constructor(init?: Partial<UserInfoModel>) {
    Object.assign(this, init);
  }
}

export interface Geography {
  city: string;
  country: string;
  region: string;
  timezone: string;
}
