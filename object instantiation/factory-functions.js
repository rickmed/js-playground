'use strict'
// try using API in other file without strict to see if freeze throws
//

function Character () {
  return {
    gameType: 'fightCharacter',  // can use default props
    canDie: true,
    describe () {
      return `An ${this.animalType}, with ${this.furColor} fur,
        ${this.legs} legs, and a ${this.tail} tail.`
    },
  }
}



function hardAttack (state) {
  const { hard } = state.attackPoints
  state.lifePoints += hard
  console.log(`Hard Attack! Added LifePoints. Total: ${state.lifePoints}`)
}

function defend (state, points) {
  const orig = state.lifePoints
  state.lifePoints -= points
  console.log(`Someone attacked me.
    Reducing ${points} lifePoints.
    Original lifePoints: ${orig}
    Remaining: ${state.lifePoints}`)
  return this
}

function getState (state) {
  console.log(state)
  return state
}


// const FightDogProto = {
//   // compose methods here
//   // init like: return Object.create(FightDogProto, ownProps)
// }

import { partial } from 'lodash/fp'
// try making using functions returning this to return the object

function addMethods ({ instance, state, methods, }) {

  methods.forEach( (fn) => {
    instance[fn.name] = partial(fn, [state])
  })

}


function FightDog (spec) {

// default params
  const defSpec = {
    weapon: 'sword',
    lifePoints: 100,
  }
  spec = Object.assign(defSpec, spec)

  // need to create a new object out of spec to keep it private
  // -otherwise user might mutate spec later on.
  const state = {...spec}

  // for instance methods chaining:
  // pass obj for methods to return the obj instead of this.
  const instance = {}
  addMethods({ instance, state, methods: [defend, getState] })
  return instance
}

const ins1 = FightDog({
  attackPoints: {
    weak: 40,
    hard: 10,
  },
  defendPoints: 10,
  name: 'lasko',
  species: 'labrador',
  tail: ['long, skinny'],
})

const ins2 = FightDog({
  attackPoints: {
    weak: 40,
    hard: 10,
  },
  defendPoints: 10,
  name: 'lasko',
  species: 'labrador',
  tail: ['long, skinny'],
})

// console.log(lasko)

ins1
  .defend(12)

ins2
  .defend(17)
  // .getState()



//
//
//
// /*
// COMPOSITIONAL DELEGATED PROTOYPAL
// Animal is a delegate protoype
// mouse could be composed from +1 protoype with object.assign
//  */
// const Animal =
//
//
// const mouse = Object.assign(Object.create(Animal), {
//   animalType: 'mouse',
//   furColor: 'brown',
//   legs: 4,
//   tail: 'long, skinny',
//   ownMethod() {
//     console.log('I am a mouse')
//   },
//   // describe() {
//   //   const type = this.animalType
//   //   return 'Overwrite my parents method. My type is ' + type
//   // },
// })
//
// console.log('Mouse own method/props:\n', mouse) // 'parent' prop is not present
// console.log('\nDelegated methods/props:\n', mouse.__proto__)
// console.log(Object.keys(mouse))



// /*
// Crockford model
// note the returned object only contains methods
// bc it uses state separated from instantiation
// spec passed in only used for initial configuration
//  */
// function constructor(spec) {
//   let {member} = spec,
//       {other} = other_constructor(spec),
//       method = function () {
//         // member, other, method, spec
//       };
//   return Object.freeze({
//     method,
//     other
//   });
// }
