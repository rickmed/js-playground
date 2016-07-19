'use strict'

let R = require('ramda')

let addThreeNumbers = (a, b, c) => console.log((a * b) + c)

let g = R.curry(addThreeNumbers)

let _ = R.__

g(1, 2, 3)
g(_, 2, 3)(1)
g(_, _, 3)(1)(2)
g(_, _, 3)(1, 2)
g(_, 2)(1)(3)
g(_, 2)(1, 3)
g(_, 2)(_, 3)(1)

var curriedAddFourNumbers = R.curry(addThreeNumbers)
let f = curriedAddFourNumbers(1, 2)
f(3)
