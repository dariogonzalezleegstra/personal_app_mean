
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personals');
var Schema = mongoose.Schema;

var schemaPersonal = new Schema({
	nombre:String,
	dni:Number,
	f_nac:String,
	});

module.exports = mongoose.model('Personal', schemaPersonal);
