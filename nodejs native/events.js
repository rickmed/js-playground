'use strict'

const EventEmitter = require('events')
var util = require("util")


/*
 * Basic usage
 */
let anyObject = new EventEmitter()

anyObject.on('hi', () => console.log('Basic Model'))

let haveListeners = anyObject.emit('hi')

console.log(haveListeners)


/*
 * Cassical inheritance with constrcutors
 */
function MyEventEmitter() {
    EventEmitter.call(this)
    this.sayHello = function () { console.log('hello')}
}

util.inherits(MyEventEmitter, EventEmitter)

var obj = new EventEmitter()
var obj1 = new EventEmitter()



function hello (x, z) { console.log('Inheritance Model', x, z) }

obj.on('greet', (z) => hello('saywhat', z))

obj.emit('greet', 'epale')

function hello1 () { console.log('BASIC EVENT') }
let onSee = obj1.on('greet', hello1)
console.log("onSee: ", onSee)
obj1.emit('greet')


/*
 * Composition
 */
var method1 = {
    method1 (param) {
        console.log(param)
    }
}

var on = {
    on: new EventEmitter().on
}

var emit = {
    emit: new EventEmitter().emit
}


function Browser () {
    return Object.assign({},
        // event,
        method1,
        on,
        emit
    )
}

var go = Browser()

go.on('hello', () => console.log('Composition Model'))

go.emit('hello')


/*
 * Create a global event system (shared between modules)
 */
global.flexBot = new EventEmitter()

flexBot.on('timeoutError', (e) => console.log('Global Model,', e))
let e = 'Error object'
flexBot.emit('timeoutError', e)

