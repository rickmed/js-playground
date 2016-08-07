const state = new WeakMap()

const getMe = function () {
  return state.get(this)
}

export function eater(delay) {
  state.set(this, {lastMeal: null, delay})
  return this
}

export function eat() {
  if ( this::canEat(new Date()) ) {
    this::getMe().lastMeal = new Date()
    console.log('I can eat')
  }
  else {
    console.log('No eating for now')
  }
  return this
}

function canEat(now) {
  const {lastMeal, delay} = this::getMe()
  return lastMeal ? (lastMeal + delay) >= now : true
}

/*
Eater functionality
 */
