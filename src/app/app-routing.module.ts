import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { loginRoutes } from './pages/login/login.routing';
import { appointmentsRoutes } from './pages/appointments/appointments.routing';
import { newAppointmentsRoutes } from './pages/appointments/new/new-appointment.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...newAppointmentsRoutes,
      ...appointmentsRoutes,
      ...loginRoutes,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }