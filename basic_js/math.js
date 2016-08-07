'use strict'

function random (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

var myNumbers = new Array(10)
// can't do this with any array methods bc they all skip items that don't have a value.
for (var i = 0; i < myNumbers.length; i++) {
  myNumbers[i] = random(1, 10)
}

console.log(myNumbers)

let numbers2 = myNumbers.map(function (e) {
  e = e + 2
  return e
})

console.log(numbers2)
