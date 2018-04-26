import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Angular2TokenService } from 'angular2-token';
import { HttpClient } from '@angular/common/http';
import { createLocalStorage } from "localstorage-ponyfill";

@Injectable()
export class AuthService {
  public localStorage = createLocalStorage();
  public SUPERVISOR = 'supervisor';

  constructor(private http: HttpClient) {};

  login(user: User) {
    return this.http.post('http://localhost:3000/api/login', user, {});
  }

  userSignedIn() {
  	return (localStorage.getItem('auth') != undefined)
  }

  logout() {
  	localStorage.removeItem('auth');
  }

  supervisorLogin() {
    return (localStorage.getItem('role') == this.SUPERVISOR)
  }

}