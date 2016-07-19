'use strict'

var Async = require('bluebird').coroutine
var Promise = require('bluebird')

var fun1 = Async(function* () {
    console.log('async op 1')
    Promise.delay(3000)
    yield Promise.resolve(true)
    // return 3
})


var fun2 = Async(function* () {
    console.log('async op 2')
    return 2
})

var fun3 = Async(function* () {
    console.log('async op 3')
    return 3
})

function syncFunc () {
    console.log('Sync op')
    return 5
}


var fun4 = Async(function* (val) {
    yield fun1()
    console.log('result from async op 1:')
    let dos = yield fun2()
    console.log(dos)
    yield Promise.delay(1000)
    let result3 = yield fun3()
    syncFunc()
    console.log(`Message: ${val}, Result from async op 3: ${result3}`)
})

fun4('Async msg')

console.log('Syncronous msg')
