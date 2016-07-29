'use strict'

const obj = {
  mandatory (fn) {
    const msg = `Missing ${fn.name} call`
    throw new Error(msg)
  }
}

function hello ({
  weight = obj.mandatory(),
  name = 'Rick',
  position: {x = 4, y = 10} = {}
} = {}) {
  console.log(name, weight, x, y)
  return weight
}

hello({
  weight: 56,
  name: 'Maria',
  position: {
    x: 15
  },
})
