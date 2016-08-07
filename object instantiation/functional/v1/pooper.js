// Pooper functionality

const state = new WeakMap()

function getMe() {
  return state.get(this)
}

export function pooper(delay) {
  state.set(this, {lastPoop: null, delay})
  return this
}

export function poop() {
  if ( this::canPoop(new Date()) ) {
    this::getMe().lastPoop = new Date()
    console.log('I can poop')
  }
  else {
    console.log('No pooping for now')
  }
  return this
}

function canPoop(now) {
  const {lastPoop, delay} = this::getMe()
  return lastPoop ? (lastPoop + delay) >= now : true
}
