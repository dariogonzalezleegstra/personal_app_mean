
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaPersonal = new Schema({
	nombre:String,
	dni:Number,
	f_nac:String,
	});

module.exports = mongoose.model('Personal', schemaPersonal);
