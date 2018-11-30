var ffi = require('ffi');
var moment = require("moment");
var startDate = new Date();
var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss');
var lib = ffi.Library('target/release/libembeber', {
  'procesar': ['void', []]
});
lib.procesar();
let endDate =  new Date();
var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss');
 var duration = moment.duration(end_date.diff(start_date));
console.log(duration.asSeconds());
console.log("completado!");