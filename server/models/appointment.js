const path = require('path');
const file = path.join(__dirname, '../json/appointments.json');
var fs = require("fs");
const CommonHelper = require('../helpers/common_helper.js');

var Appointment = function(data) {
	this.title = data['title'];
	this.time = data['time'];
	this.username = data['username'];
	this.agenda = data['agenda'];
	this.uuid = CommonHelper.uuid();
}

// List all appointments
Appointment.all = function(data) {
	return JSON.parse(fs.readFileSync(file));
}

// Add new appointment
Appointment.add = function(data) {
	appointments = fetchAll();
	appointment = new Appointment(data);
	appointments.push(appointment.toJSON());
	commit(appointments);
	return appointment;
}

// Find appointment by UUID
Appointment.findByUUID = function(uuid) {
	appointments = fetchAll();
	for(var appointment of appointments) {
        if(appointment['uuid'] == uuid) { return appointment; }
    };
}

// Delete appointment by UUID
Appointment.deleteByUUID = function(uuid) {
	appointments = fetchAll();
	if(appointment = Appointment.findByUUID(uuid)) {
		delete appointments[appointments.indexOf(appointment)];
		commit(appointments.filter(x => x != null));
		return true;
	}
	
}

Appointment.prototype.toJSON = function() {
	return {
		"title": this.title, 
		"time": this.time, 
		"username": this.username, 
		"agenda": this.agenda,
		"uuid": this.uuid
	};
}

fetchAll = function() {
	return JSON.parse(fs.readFileSync(file));
}

commit = function(appointments) {
	fs.writeFile(file, JSON.stringify(appointments), function(err){
		if(err) { console.log(err); }
	});
}

module.exports = Appointment;