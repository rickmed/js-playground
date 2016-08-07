'use strict'

const input = {
  character: {
    attackPoints: {
      weak: 0,
      hard: 0,
    },
    defendPoints: 10,
  },
  name: 'charlie',
  tail: ['short', 'black'],
}

function isObj (val) {
  const type = toString.call(val).slice(8, -1)
  return type === 'Object' ? true : false
}

// The tree transverse throws when a key is not present in an object.
// I want so do side effects so using for..of etc instead of reduce/filter/map.
// side effect is throw when an argument is not valid
const valPath = []

function trasTree (obj) {

  for ( const key of Object.keys(obj) ) {

    const val = obj[key]

    if ( isObj(val) ) {
      valPath.push(key)
      trasTree(val)
    }
    else {
      const path = valPath.concat('').join('.')
      console.log(`${path}${key}: ${val}`)
    }
  }

  valPath.pop()  // Up a node

}

trasTree(input)
