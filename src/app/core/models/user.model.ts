export class UserProfileModel {
  email!: string;
  role!: string;

  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
