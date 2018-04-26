export class Appointment {
  title: string;
  time: string;
  user: string;
  agenda: string;
  uuid: string;

  constructor(model: any = null){
    if(model){
      this.title = model.title;
      this.time = model.time;
      this.user = model.user;
      this.agenda = model.agenda;
      this.uuid = model.uuid;
    }
  }
}