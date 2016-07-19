'use strict'

let string1 = 'http://127.0.0.1:9515/'
let string2 = 'john'
let string3 = 'monica'
let string4 = 'Hello what\s going on there          '

let concat = string2 + ' ' + string3
console.log(concat)

let index = string1.indexOf('127')
console.log(index)

let chars = string1.length
console.log(chars)

let slice = string4.slice(4, 9)
console.log(slice)

let split = string4.split('', 8)
console.log(split)

let trim = string4.trim()
console.log(trim)

let st = string1.split(':')
let port = st[2].replace('/', '')
console.log(port)
console.log(typeof port)
