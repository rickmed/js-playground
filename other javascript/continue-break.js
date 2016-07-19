'use strict'

// continue
var i = 0

while (i < 5) {
  i++

  if (i === 3) {
    continue
  }
  console.log(i)
}

console.log('-----------------')

// break
function testBreak (x) {
  var i = 0

  while (i < 6) {
    if (i === 3) {
      break
    }
    i += 1
    console.log(i)
  }
  return i * x
}

testBreak(2)
