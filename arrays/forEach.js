'use strict'

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

// can't do this with any array methods bc they all skip items that don't have a value.
// var numbers = new Array(20)
// console.log(numbers)
// for (var i = 0; i < numbers.length; i++) {
//   numbers[i] = randomIntInc(1, 10)
// }
// console.log('numbers:', '\n', numbers)
// console.log('===================')

// IDEM but using recurssion
let myNumbers = []
let randomArray = function(size) {
  if (size === 0) {return}
  myNumbers.push(randomIntInc(1, 10))
  randomArray(size - 1)
}
randomArray(10)
console.log(myNumbers)
console.log('===================')

myNumbers.forEach(function(e, index) {
  if (index === (myNumbers.length - 1)) {
    console.log('Skipped index: ', index)
    return
  }
  e += randomIntInc(1, 10)
  // console.log(e)
  console.log(index)
// console.log(array)
})
