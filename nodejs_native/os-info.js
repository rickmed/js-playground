'use strict'

var os = require('os')
var eol = os.EOL

// EOL is os specific end of line: \n or \r\n
console.log(eol + os.uptime())
console.log(eol + os.type())

// rest of os properties
console.log(os.platform())
console.log(os.arch())
console.log(os.release())
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.totalmem())
console.log(os.freemem())
// console.log(os.networkInterfaces())
console.log(os.tmpdir())
console.log(os.cpus())

// console log transforms automatically typeof
console.log(eol + Object.getOwnPropertyNames(os))
console.log(eol, Object.getOwnPropertyNames(os))
