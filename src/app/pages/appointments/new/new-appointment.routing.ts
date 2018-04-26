import { Routes } from '@angular/router';
import { NewAppointmentComponent } from './new-appointment.component';

export const newAppointmentsRoutes: Routes = [
  {
    path: 'appointments/new',
    component: NewAppointmentComponent
  }
];
