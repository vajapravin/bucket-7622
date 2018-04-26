import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
  selector: '.vr-sidenav-desktop',
  templateUrl: './desktop.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DesktopComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
