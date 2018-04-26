import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  host = env.host;
  year = new Date().getFullYear();

  //noinspection JSUnusedLocalSymbols
  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onLoginClick() {
  }

  onLogoutClick() {
  }
}