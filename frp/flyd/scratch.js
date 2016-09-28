const flyd = require('flyd')
// console.log(flyd)

var x = flyd.stream(4)  // Stream with initial value `4`
// console.log(x)
var y = flyd.stream()  // Stream with no initial value
// Create a stream that depends on the two previous streams
// and with its value given by the two added together.
var sum = flyd.combine(function(x, y) {
  return x() + y()
}, [x, y])
// console.log(sum)
// `sum` is automatically recalculated whenever the streams it depends on changes.
y(8)
console.log(sum()) // logs 12
x(12)
console.log(sum()) // logs 20

