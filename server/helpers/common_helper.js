const uuidv4 = require('uuid/v4');

var CommonHelper = function() {};

// UUID to unique appointments
CommonHelper.uuid = function(data) {
	return uuidv4();
}

module.exports = CommonHelper;