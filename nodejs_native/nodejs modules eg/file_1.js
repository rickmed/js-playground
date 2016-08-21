'use strict'

var play = require('./file_2')


let obj1 = play()
let obj2 = play()


let c = obj1.meth7('YES')
console.log(c)
console.log(obj2.meth7())
