var util = require('util');

console.log('' + util.inspect(process.stdout, true, 0, true));
console.log((process.stdout.__proto__))
console.log(process.version);
