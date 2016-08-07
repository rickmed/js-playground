// Eater functionality

import { init } from './helpers.js'

let state

export default {
  Eater({delay = 1, lastMeal = null} = {}) {
    ( {state} = this::init({spec: {delay, lastMeal}}) )
  },
  eat() {
    if ( this::fns.canEat(new Date()) ) {
      this::state().lastMeal = new Date()
      console.log('I can eat')
    }
    else {
      console.log('No eating for now')
    }
    return this
  }
}

// in case I want to decorate it
const fns = {
  canEat(now) {
    const {lastMeal, delay} = this::state()
    return lastMeal ? (lastMeal + delay) >= now : true
  }
}
