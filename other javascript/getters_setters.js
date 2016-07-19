'use strict'

let add = (v) => v * 2

let a = {
  j: 3,
  get h() {return a.j * 2}
}

console.log(a.h)
