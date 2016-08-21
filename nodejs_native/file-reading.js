'use strict'

let fs = require('fs')

// blocks io
let textSync = fs.readFileSync(__dirname + './../resources/dummy.txt', 'utf8')
console.log(textSync)

// does not block io
let textAsync = fs.readFile(__dirname + './../resources/dummy.txt', 'utf8', (err, data) => {
  err ? console.log('There was an error') : console.log(data)
})
console.log(textAsync)

// notice how the results get done in the console
console.log('!Done!')
