import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user.model';
import { Appointment } from '../models/appointment.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppointmentService {
  constructor(private http: HttpClient) {};

  public listAll() {
    return this.http.get<Appointment[]>('http://localhost:3000/api/appointments');
  }

  public delete(uuid: string) {
  	return this.http.delete('http://localhost:3000/api/appointments/'+uuid);
  }

  public add(appointment: Appointment) {
  	return this.http.post('http://localhost:3000/api/appointments', appointment, {});
  }
}