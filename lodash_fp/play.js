import convert from 'lodash/fp/convert'
const _ = convert(require('lodash').runInContext(), { 'immutable': false })


const upper = (str) => str + 'epale'

const eg = 'funny cats '

const prettyInput = (upper)((_.trim)(eg))

console.log(prettyInput)
