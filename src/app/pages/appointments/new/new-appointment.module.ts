import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAppointmentComponent } from './new-appointment.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [NewAppointmentComponent]
})
export class NewAppointmentModule { }
