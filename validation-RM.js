'use strict'

const { parseType } = require('type-check')



const input = {
  character: {
    attackPoints: {
      weak: 0,
      // hard: 0,
    },
    defendPoints: 8,
  },
  name: 'charlie',
  tail: ['short', 'black'],
}

const schema = {
  character: {
    attackPoints: {
      weak: 'Number',
      hard: 10,  // default
    },
    defendPoints: 'Number',
  },
  name: 'charlie',
  tail: ['short', 'black'],
}

function type (val) {
  return toString.call(val).slice(8, -1)
}


// returns the value from a path of an object
function valFromPath (path, obj) {
  return path.reduce((acc, val) => acc[val], obj)
}

function typeOrDef (val) {
  return val === ( 'Number' | 'String' | 'Array' | 'Boolean' ) ?
    'type'
    : 'val'
}

function validateType (inputType, schemaVal) {
  return inputType === schemaVal ? true : false
}

function isLast (arr, val) {
  return arr[arr.length - 1] === val ? true : false
}

function valExists (path, obj) {
  console.log(path)
  const exists = path.reduce( (acc, val) => {
    return isLast(path, val) ? acc.hasOwnProperty(val) : acc[val]
  }, obj)
  console.log(exists)
  return exists

}

const pathStr = (path, key) => `${path.concat('').join('.')}${key}`

const valPath = []
const validation = {}

function validator (input, schemaNode) {

  for ( const key of Object.keys(schemaNode) ) {

    const schemaVal = schemaNode[key]

    if ( type(schemaVal) === 'Object' ) {
      valPath.push(key)
      validator(input, schemaVal)
    }
    else {
      if ( !valExists(valPath, input) ) {

        console.log(valPath)
        const msg = `${pathStr(valPath, key)} is required`
        throw new Error(msg)
      }
      else {
        if ( typeOrDef(schemaVal) === 'type' ) {
          const inputVal = valFromPath(valPath, input)
          const inputType = type(inputVal)
          if ( inputType !== schemaVal ) {
            const msg = `${pathStr(valPath, key)} needs to be ${schemaVal}`
            throw new Error(msg)
          }
        }
      }
    }
  }

  valPath.pop()  // Up a node
}


validator(input, schema)
