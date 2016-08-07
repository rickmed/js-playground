'use strict'

// vs v1. Adds:
// Composability
// A library helper for verbose

import Pooper, {poop} from './pooper.js'
// import Eater, {eat} from './eater.js'
const {Eater, eat} = require('./eater.js').default
import {compose} from './helpers.js'


function validateArgs (schema) {
  return function (opt) {
    console.log(schema, opt)
  }
}

function setDefaults (args) {
  return function (opt) {
    console.log(args, opt)
  }
}


// const PooperImp = statics(
//   validateArgs({hi: 'WHAAT'}),
//   setDefaults({hi: 'WHAAT'})
// )
//   ::skills(Pooper)

const PooperImp = compose({
  statics: [validateArgs({hi: 'WHAAT'}), setDefaults('helloo')],
  skills: [Pooper]
})

const EaterImp = compose({ skills: [Eater] })
  ::compose({ skills: [Eater] })

const PooperEater = compose(PooperImp, EaterImp)

const charlie = PooperEater({Pooper: { delay: 10 }, Eater: { delay: 10 }})


charlie
  ::poop()
  ::eat()
  // ::poop()
  // ::eat()
