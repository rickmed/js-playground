var _ = require('lodash/fp').convert({ 'immutable': false });

const upper = (str) => str + 'epale'

const eg = 'funny cats '

const prettyInput = upper(_.trim(eg))

console.log(prettyInput)
