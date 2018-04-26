const express = require('express');
const path = require('path');
const router = express.Router();
const Appointment = require('../models/appointment.js');
const AppointmentValidator = require('../validators/appointment.js');
var fs = require("fs");

const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../locale/en.json')));

// Get /api/appointments
router.get('/appointments', (req, res) => {
    res.send(Appointment.all());
});

// POST /api/appointments
router.post('/appointments', (req, res) => {
    appointmentValidator = new AppointmentValidator(req.body);
    if(appointmentValidator.validate()) {
        res.send(Appointment.add(req.body));
    } else {
        res.send({error: en['auth']['invalid_params']});
    }
});

// DELETE /api/appointments/:uuid
router.delete('/appointments/:uuid', (req, res) => {
    if(Appointment.deleteByUUID(req.params['uuid'])) {
        res.send({success: en['auth']['appointment_removed']});
    } else {
        res.send({error: en['auth']['invalid_uuid']});
    }
});

// Get /api/login
router.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    response = {error: en['auth']['invalid_creds']}
    users = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/users.json')));
    for(var user of users) {
        if(user['name'] == req.body['username'] && user['password'] == req.body['password']) {
            response = user;
            break;
        }
    };
    res.send(JSON.stringify(response));
});

module.exports = router;