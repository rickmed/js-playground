'use strict'

let R = require('ramda')
let fs = require('fs')

let text = fs.readFileSync(__dirname + './../src/dummy.txt', 'utf8')

// trim deletes the final line in a file
let ipsumArray = text.trim().split(' ')

// filters something
let isCommodo = arr => arr === 'Cupidatat'

// deconstructs problem as with functional programming
let filterCupidatat = ipsumArray.filter(isCommodo)
let rejectCupidatat = R.reject(isCommodo, ipsumArray)

console.log(text)
console.log('\n', ipsumArray)
console.log('\n', rejectCupidatat)
console.log('\n', filterCupidatat)
