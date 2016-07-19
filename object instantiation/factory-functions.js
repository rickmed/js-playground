'use strict'

// /* Simple usage */

let Dog = () => {
    const sound = 'woof'
    return {
        talk: () => console.log(sound),
        property: 2
    }
}

let charlie = Dog()
console.log(charlie)
charlie.talk()

//
//
// /* Simple Composition */
//
// function bark (name) {
//     console.log(name)
// }
//
// function bark2 () {
//     console.log(this.name)
// }
//
// function Cat (name) {
//
//     return {
//         bark,
//         bark2,
//         name
//     }
// }
//
// let cat1 = new Cat('bubbles')
//
// cat1.bark('epale')
// cat1.bark2()


/* More complex composition */

// this method pattern can be chained
// ({}) in arrow functions returns an object literal
const Barker = (state) => ({

  // ES6: "bark (param)" is same as "bark: function (param)"
  bark (msg) {
    msg = msg || ''
    console.log(`Woof, I am name hello ${state.name} ${msg} WHAT!`)
    return this
  }
})

// if there is no need for initial state to be set in the method like above,
// a wraper function is not needed. You need to return and object literal
const Walker = {
    walk: (speed) => console.log('This is my current speed:', speed)
}

const Killer = (state) => ({
    kill: () => state.position = state.position + state.speed
})


/*
 * Composing a new object with the previously defined methods
 * with shared and private default state
 */
const murderRobotDog = (name, param) => {
    let state = {
        name,
        speed: 30,
        size: 'big'
    }
    return Object.assign(
        { driver: param },
        Barker(state),
        Walker,
        Killer(state)
    )
}

let sniffles = murderRobotDog('sniffles', 'yes')

sniffles.__proto__.talk = x => {console.log(x); return this}

sniffles.bark(sniffles.driver).bark().bark().walk(30).talk('YELLOOO')
console.log(sniffles)
console.log(sniffles.prototype)


// // // "INHERITANCE - COMPOSITION" PATTERN ========================

// const pooper = () => ({
//     poop: () => console.log('poop')
// });

// const Animal = () => {
//     let state = {
//         move: () => {
//             console.log('move')
//         }
//     }
//     return Object.assign({}, state, pooper())
// }

// const Dog = (name) => {
//     const parent = Animal();
//     let state = {
//         bark: () => console.log('Bark! I am', name)
//     }
//     return Object.assign({}, parent, state)
// }

// let dog = Dog('charlie');
// dog.poop()
// dog.move()
// dog.bark()
