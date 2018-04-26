export class User {
  username: string;
  password: string;
  role: string;

  constructor(model: any = null){
    if(model){
      this.username = model.username;
      this.password = model.password;
      this.role = model.role;
    }
  }
}