const {flow, add} = require('lodash/fp')

// watch out if using "this" on arrow functions
const square = (n) => n * n

// add is arity 2.
var addSquare = flow([add, square])
console.log(addSquare(1, 2))
// ➜ 9
