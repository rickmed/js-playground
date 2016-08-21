import * as R from 'ramda'  // or...
// import { pipe, reduce } from 'ramda'
import * as fs from 'fs'

/* import a custom module */
import div from './basicModule.ts'
console.log(div(10, 5))


/* import a custom .js module */
import { double } from './someJS.js'
console.log(double(9))

/* modules without types must be declared in declarations.d.ts*/
import * as SS from 'sanctuary'
import './typesRM.ts'  // patching types (<Inc>)

/* init sanctuary*/
const S = SS.create({
  checkTypes: process.env['NODE_ENV'] !== 'production',
  env: SS.env,
})

/* using sanctuary S.inc must return any */
const incHead: (r: string[]) => any
 = R.pipe(R.head, parseInt, S.inc)
 // or...alternative you can assert its type
// const incHead: (r: string[]) => number
//  = R.pipe(R.head, parseInt, <Inc> S.inc)

/* here we recover the any from before typing the function */
const firstAdd10: (r: string[]) => number
  = R.pipe(incHead, R.add(10))

console.log(firstAdd10(['23', '32', '85']))


/* here I needed to delete add definitions regarding strings */
// alternative function typing syntax
const fn2: {(r: number[]): number}
  = R.reduce(S.add, 0)

console.log(fn2([23, 32, 30]))


/*pipe definitions are not perfect so its a bug
escape hatch is <any>
*/
const lowerFirst: (r: string) => string
 = R.pipe(<any> R.head, R.toLower)

console.log(lowerFirst('HELLO'))
