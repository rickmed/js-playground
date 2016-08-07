'use strict'

const myObj = {
  hello: 4
}

myObj.hello = 5
console.log(myObj)

Object.freeze(myObj)

myObj.what = 'yes'
myObj.hello = 7  // without 'use stric' this will not throw

console.log(myObj)
