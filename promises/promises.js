'use strict'

let fetch = require('./fetch.js')

// fetch() returns a promise
let promise = fetch('bears.txt')

// resolving and chaining objects than returns in a promise
promise.then(bears => {
  console.log(bears)
  // throw new Error('Uh oh')
  return fetch('fish.txt')
}).then(function (fish) {
  console.log(fish)
}).catch(function (err) {
  console.error('WE GOT ERROR', err)
})

// .then will execute once all promises in array are resolved.
Promise.all([
  fetch('bears.txt'),
  fetch('fish.txt')
]).then(function (values) {
  let bears = values[0]
  let fish = values[1]
  console.log(bears, fish)
}).cath(err => {
  console.log('there was an error', err)
})

// Creating promises
let promise2 = new Promise(function (resolve, reject) {
  // reject(new Error("uh oh"))
  resolve('all good')
})

// using ir
promise2.then(function (result) {
  console.log('was it good?', result)
}).catch(function (err) {
  console.error('ERR', err)
})
