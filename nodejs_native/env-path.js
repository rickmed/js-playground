'use strict'

let envpath = process.env.PATH
console.log('\n', envpath)

let env = envpath.split(';')
console.log('\n', env)

let a = typeof envpath
console.log('\n', a)
