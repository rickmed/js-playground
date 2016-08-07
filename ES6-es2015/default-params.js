'use strict'

const obj = {
  mandatory (fn) {
    const msg = `Missing ${fn.name} call`
    throw new Error(msg)
  }
}

function hello ({
  // weight = obj.mandatory(),
  name = 'Rick',
  position: {x = 4, y = 10} = {}
} = {}) {
  console.log(arguments[0])
  return name
}

hello({})

// function yes ({newDog}) {
//   console.log(newDog)
// }
//
// yes({
//   newDog: {
//     age: 332
//   }
// })
