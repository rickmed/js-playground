'use strict'

import './dummy.js'

/*
 * String templates: multi-line, expression interpolation.
 */
let a = 10
let b = 5

console.log(`hello
${2 * a + b}`)


/*
 * Objects extended
 */
var obj = {
    method1 (param) { // shorthand to define methods in object literals
        console.log(param)
    }
}

obj.method1('EPALE')


/* Destructuring (for reapeting var, objects stuff, etc)
 * use node --harmony-destructuring
 */

// assign array values to variables
let arr = [1, 3, 4, 7, 8]

console.log('===')
let [first, second, third] = arr
let [one, two, ...tail] = arr
console.log(second)
console.log(tail)
console.log('===')

// Rest parameters

// function hello (x, y, ...args) {
//     console.log(x, y, args)
// }
//
// let arr = [1, 2, 3, 4]
// hello(...arr)
//
// // function accepts parameters as single object with:
// // properties without specfic order
// // and default values
// function example ({ one, two = 'dos', three }) {
//     return [one, two, three]
// }
//
// // and assign multiple values return to variables
// let [val1, val2, val3] = example({three: 'tres', one: 'uno'})
// console.log(val1, val2, val3)
//
// // or placing the returned values in an object
// function returnMultipleValues() {
//     return {
//         foo: 'YES',
//         bar: 'WHAT'
//     }
// }
// var { foo, bar } = returnMultipleValues();
// console.log(foo, bar)
