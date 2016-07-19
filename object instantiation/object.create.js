'use strict'

// object.creates assigns the object passed as the prototype of the object created

let food = {
    bark,
    bark2,
    hello: 'hello'
}

let food2 = {bark3}

function Food () {

    let ins = Object.create(food)

    ins.prop1 = 14

    return ins
}


function bark (name) {
    console.log(name)
    console.log(this.hello)
    return this
}

function bark2 (name) {
    console.log(name)
    return this
}

function bark3 (name) {
    console.log(name)
    return this
}


let waffle = Food()
console.log(waffle)

Object.assign(waffle, food2) // extend it
waffle.bark('what').bark2('epale').bark3('YESSS')
console.log(waffle.prop1)


// function Barker (state) {
//     return function (msg) {
//         msg = msg || ''
//         console.log(`Woof, I am name hello ${state.name} ${msg} WHAT!`)
//         return this
//     }
// }

// function walk (speed) {
//     console.log('This is my current speed:', speed)
// }

// const Killer = (state) => ({
//     kill: () => state.position = state.position + state.speed
// })


// /*
//  * Composing a new object with the previously defined methods
//  * with shared and private default state
//  */
// const murderRobotDog = (name, param) => {
//     let state = {
//         name,
//         speed: 30,
//         size: 'big'
//     }

//     let instance = {
//         driver: param,
//         bark: Barker(state),
//         walk,
//         kill: Killer(state)
//     }

//     return Object.create(instance)
// }


// let sniffles = murderRobotDog('sniffles', 'yes')

// sniffles.talk = x => {console.log(x); return this}

// console.log(sniffles)
// sniffles.bark(sniffles.driver).bark().bark('hey').walk(30)
// sniffles.talk('YELLOO')

