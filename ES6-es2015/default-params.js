'use strict'

function mandatory () {
  throw new Error('This param is mandatory')
}


function hello ({ weight, name = 'Rick', position = {x: 4, y: 10}} = {}) {
  console.log(name, weight, position)
  console.log(arguments)
  return weight
}

hello({
  name: 'Maria',
  position: {
    x: 15
  }
})
