'use strict'

/*Composition */

function bark (name) {
    console.log(name)
}

function bark2 (name) {
    console.log(name)
}

let arr = [bark, bark2]

function Dog (name) {
    arr.forEach( fn => Dog.prototype[fn.name] = fn)

    this.name = name
}


let charlie = new Dog('charlie')
console.log(charlie)

charlie.bark('charlie')



/* Inheritance */

// const util = require('util');

// function Animal(name) {
//     this.name = name
//     this.prop
//     this.run = function() {
//         console.log("running " + this.name)
//     }
// }

// function jump () { console.log('JUMP!!')}

// Animal.prototype.jump = jump

// let animal1 = new Animal('sniffles')

// animal1.jump()

// function Rabbit(name) {

//     Animal.call(this, name) // inherit

//     this.bounce = function() {
//         console.log("bouncing " + this.name)
//     }
// }

// Rabbit.prototype.walk = () => console.log('Walking...')

// util.inherits(Rabbit, Animal)

// let rabbit = new Rabbit("charlie")

// rabbit.bounce() // own method
// rabbit.walk() // own method

// rabbit.run()    // inherited method
// rabbit.jump()    // inherited method

// console.log(rabbit)

