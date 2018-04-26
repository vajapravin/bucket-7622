var AppointmentValidator = function(data) {
    this.title = data['title'];
    this.time = data['time'];
    this.username = data['username'];
    this.agenda = data['agenda'];
}

// Validate required params [title, time, username, agenda]
AppointmentValidator.prototype.validate = function() {
    if(!this.title || !this.time || !this.username || !this.agenda) {
        return false;
    } else {
        return true;
    }
}

module.exports = AppointmentValidator;