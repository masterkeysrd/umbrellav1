export class UserLogin {
  UserName: string;
  Password: string;
  FacebookId: string;

  constructor(username: string, password: string) {
    this.UserName = username;
    this.Password = password;
  }
}
