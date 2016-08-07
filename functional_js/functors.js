const _ = require('ramda')

const log = console.log.bind(console)

/*,
Basic functor
 */
// const newFunctor = (x) => ({
//   __value: x
// })
//
// // Can't use arrow fn here since this changes
// function map (fn) {
//   return newFunctor(fn(this.__value))
// }
//
// //Notice that map needs act on the value inside the function type. Meaning,
// //it must know its shape.
//
// // concat/prop are curried. Meaning, return functions, that are partially applied with the applied argument, which map can use them.
// const val = newFunctor("bombs")
//   ::map(_.concat(' away')) // String -> String
//   ::map(_.prop('length'))  // String -> Number
//
//
// // val is the same type as our newFunctor constructor
// console.log(val)


/*
IO Functor (to manage side effects)
 */

// unfortunately, if using ramda's map, you must construct functors
// using prototype (fantasy-land spec).
// contains the side effect in ._val, to be ran only when specifically called .val()
function IO(f) {
  this._val = f
}

// since functor._val = fn, the f passed in map can't be applied on it, thus
// be composed with it. .val is now a composed function
IO.prototype.map = function(f) {
  return new IO(_.pipe(this._val, f))
}

// Example

// side effect: depends on the value set of process (not pure) at
// a given time. Meaning, for the same input (none), it returns a different
// output
function getProcess () {
  return process
}

// contain side effect
var io_F = new IO(getProcess)

const val = io_F.map(_.prop('version')).map(_.replace(/\./g, '-'))

log(val._val())
// IO(v6-3-0)
