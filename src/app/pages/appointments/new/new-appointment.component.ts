import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/appointment.model';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { createLocalStorage } from "localstorage-ponyfill";

@Component({
  selector: 'vr-new-appointments',
  templateUrl: './new-appointment.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AppointmentService, AuthService]
})
export class NewAppointmentComponent implements OnInit {
	public appointment = new Appointment();
  public localStorage = createLocalStorage();

  constructor(private appointmentService: AppointmentService,
    private authService: AuthService,
    private router: Router,
  	private ref: ChangeDetectorRef) {
    if(!authService.supervisorLogin()) { this.router.navigate(['appointments']); }
  }

  ngOnInit() {}

  saveAppointment() {
    this.appointment['username'] = localStorage.getItem('auth');
  	this.appointmentService.add(this.appointment).subscribe(result => {
      if(result.hasOwnProperty('error')){
        alert(result['error']);
      } else {
        this.router.navigate(['appointments']);
      }
    });
  }
}
