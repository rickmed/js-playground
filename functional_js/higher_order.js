'use strict'

var func = function() {
  var a = 3
  return function(b) {
    console.log(b * a)
  }
}

var closure = func()
closure(4) // 12
