var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var schemaEntryExit = new Schema({
	id_pers: {type: Schema.Types.ObjectId, ref: 'Personal'},
	type: String, //Entry or exit
	alta: {type: String, default:
		moment(new Date()).format("DD-MM-YYYY H:mm:ss") }

});

module.exports = mongoose.model('EntryExit', schemaEntryExit);
