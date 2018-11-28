var ffi = require('ffi');
var lib = ffi.Library('target/release/libembeber', {
  'procesar': ['void', []]
});
lib.procesar();
console.log("completado!");