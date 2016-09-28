import { curry, pipe } from 'ramda'

function curB() {
  return curry(this)
}

function pipeB() {
  return pipe(this)
}

const sumB = ((a, b) => a + b)
::curB()::pipeB()

// or...

const sum =
curry(pipe(
  (a, b) => a + b
))

console.log(sumB(3)(4))
console.log(sum(3)(4))
