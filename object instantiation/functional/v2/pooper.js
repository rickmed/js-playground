// Pooper functionality

import { init } from './helpers.js'

let state

function required() {
  throw 'Must pass at least an empty object'
}

export default function Pooper({delay = 1, lastPoop = null} = required()) {
  ( {state} = this::init({spec: {delay, lastPoop}}) )
}

export function poop() {
  if ( this::canPoop(new Date()) ) {
    this::state().lastPoop = new Date()
    console.log('I can poop')
  }
  else {
    console.log('No pooping for now')
  }
  return this
}

function canPoop(now) {
  const {lastPoop, delay} = this::state()
  return lastPoop ? (lastPoop + delay) >= now : true
}
