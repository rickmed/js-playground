'use strict'

const { findKey } = require('lodash/fp')

const spec = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
}

// ins does not have a prototype
const ins = Object.assign(Object.create(null), spec)

// lodash methods work
// console.log(findKey(i => i.age < 42)(ins))

console.dir(ins.__proto__ === undefined)
console.dir(spec.__proto__ === undefined)
