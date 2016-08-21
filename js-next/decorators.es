'use strict'

global.log = console.log


function decorateMe (target, name, descriptor) {
  log(target)
  log(name)
  log(descriptor)
}


const dog = {
  intro: 'Woof',
  name: 'charlie',

  @decorateMe
  greet (param1, param2) {
    return `${this.intro}! I'm ${this.name}. ${param1}, ${param2}`
  }
}

class Person {
  setName (first, last) {
    this.first = first
    this.last = last
  }
  greet () {
    log(`Hi. My name is ${this.first} ${this.last}`)
  }
}

const john = new Person()

john.setName('John', 'Carter')

// john.greet()
