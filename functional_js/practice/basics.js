const R = require('ramda')
const Rf = require('ramda-fantasy')

const log = console.log.bind(console)

// import * as R from 'ramda'
// import * as Rf from 'ramda-fantasy'  // ts won't let use RF without types


const data = {
  nme: 'ricky',
}

// const getName = R.pipe(R.prop('name'), Rf.Maybe.fromNull)
// log(getName(data))

Rf.Maybe.prototype.inspect = function() { return this.toString()}

log(Rf.Maybe.Just('hello'))
