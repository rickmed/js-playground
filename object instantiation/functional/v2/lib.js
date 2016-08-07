import {mergeWith, reduce, concat} from 'lodash/fp'

// args is a descriptor or init options
export function compose(...args) {

  const haveArgs = args.length > 0 ? true : false

  let options
  let descriptor

  if ( haveArgs ) {
    if ( args[0].statics || args[0].skills ) return composing
  }
  else {
    return init
  }

  const options = args[0]

  function composing(...newDesc) {
    // newDesc is an array of 1 or more descriptors
    // descriptor is idem
    const descriptor =
    newDesc = mergeConcat(descriptor)(newDesc)
    compose(newDesc)
  }

  function init(options) {
    // validateOptions()
    const inst = Object.create(null)
    for ( let st of statics ) {
      inst::st(options)
    }
    for ( let skill of skills ) {
      inst::skill(options[skill.name])
    }
    return inst

    // function validateOptions () {
    //
    // }
  }
}

// helpers
const mergeConcat = reduce(mergeWith(concat))


// lib
export function getState(wm) {
  return function () {
    return wm.get(this)
  }
}

export function init({spec}) {
  const state = new WeakMap()
  const initState = Object.create(null)
  Object.assign(initState, spec)
  state.set(this, initState)
  // return all common helper functions here
  return {state: getState(state)}
}
