import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { NewAppointmentModule } from './appointments/new/new-appointment.module';

@NgModule({
  imports: [
	  CommonModule,
    LoginModule,
    AppointmentsModule,
	  NewAppointmentModule,
  ],
  declarations: []
})
export class PagesModule { }
