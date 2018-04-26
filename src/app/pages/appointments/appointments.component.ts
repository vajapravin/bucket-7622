import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { AppointmentService } from '../../services/appointment.service';
import { createLocalStorage } from "localstorage-ponyfill";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vr-appointments',
  templateUrl: './appointments.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AppointmentService, AuthService]
})
export class AppointmentsComponent implements OnInit {
	public appointments = [];
  public localStorage = createLocalStorage();

  constructor(private appointmentService: AppointmentService,
    private authService: AuthService,
    private router: Router,
  	private ref: ChangeDetectorRef) {
    if(!this.authService.userSignedIn()) { this.router.navigate(['/']); }
  	else { this.fetchAppointments(); }
  }

  ngOnInit() {}

  deleteAppointment(uuid: string) {
  	if(confirm('Do you want to continue?')) {
  		this.appointmentService.delete(uuid).subscribe(result => {
	  		this.ref.detectChanges();
	  		this.fetchAppointments();
	  	});
  	}
  }

  fetchAppointments() {
  	this.appointmentService.listAll().subscribe(result => {
      this.appointments = result;
      this.ref.detectChanges();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
