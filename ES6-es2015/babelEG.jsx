'use strict'

const somvar = 'hi'



function mandatory (fn) {
  const msg = `Missing ${ + 201 + somvar } call`
  throw new Error(msg)
}





const obj = {
  someProp: 'yes',
  method1 (name) {
    console.log(name)
    return this.someProp
  },
  some: 45,
}

function hello ({
  weight = mandatory(),
  name = 'Rick',
  position: {x = 4, y = 10} = {}
} = {}) {
  console.log(name, weight, x, y)
  return weight
}

// hello({
//   weight: 56,
//   name: 'Maria',
//   position: {
//     x: 15
//   },
// })

hello()

var server = require('express')()

server.use(bodyParser.json())
