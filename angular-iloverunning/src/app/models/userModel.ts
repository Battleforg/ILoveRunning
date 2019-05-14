export class UserModel {
  constructor(
    public guid: string,
    public uid: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public zipCode: string
  ) {}
}
