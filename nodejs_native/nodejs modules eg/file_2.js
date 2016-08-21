'use strict'

// let driver

module.exports = play

let what = 'def'

function play() {

  return {
    meth1,
    meth2,
    meth7,
    driver: 1
  }
}

function meth1(param) {
  let j = 'default'
  if (param) {
    j = param
    return j
  }
  console.log(j)
}


function meth7(param) {
  if (param) return what = param
  else return what
}


function meth2() {
  meth3.call(this)
}


function meth3() {
  meth4.call(this)
}


function meth4() {
  console.log(this.driver)
}


function meth6() {
  console.log(what)
}
