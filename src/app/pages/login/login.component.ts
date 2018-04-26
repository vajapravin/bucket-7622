import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { createLocalStorage } from "localstorage-ponyfill";

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
	public user = new User();
  public localStorage = createLocalStorage();

  constructor(private authService: AuthService,
    private router: Router,
  	private ref: ChangeDetectorRef) {
    if(this.authService.userSignedIn()) { this.router.navigate(['appointments']); }
  }

  ngOnInit() {}

  loginUser() {
  	this.authService.login(this.user).subscribe(result => {
      if(result.hasOwnProperty('error')){
        alert(result['error']);
      } else {
        localStorage.setItem("auth", result['name']);
        localStorage.setItem("role", result['role']);
        this.router.navigate(['appointments']);
      }
    });
  }

}
