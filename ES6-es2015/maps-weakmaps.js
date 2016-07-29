function nl () {
  console.log('----------------------')
}

'use strict'

const myMap = new Map()

console.log(myMap)

const keyObj = {}

myMap.set('myProp', 'myVal')
myMap.set( () => 'whatever', 87)
.set(keyObj, { hello: 'WHAT'})
.set(2, 'epale')


console.log(myMap.get('myProp'))
console.log(myMap.get( () => 'whatever'))
console.log(myMap.get(keyObj))
console.log(myMap.get(2))

console.log('Map size:', myMap.size)
// console.log(myMap.clear())
console.log(myMap.delete('myProp'), 'returns true if existed')
console.log(myMap.entries())
console.log(myMap.has( () => 'whatever'))
console.log(myMap.keys())

nl()
console.log('To Arrays:')
const arr = [...myMap.values()].filter( val => val !== 87)
console.log(arr, arr.length)  // to use it as an array


nl()
console.log('Key and values:')
myMap.forEach( (key, value) => {
  console.log(key, ":", value)
})
console.log('or...')
for (let [key, val] of myMap) console.log(key, val)
for (let item of myMap) console.log(item)


// // another way of instantiating with arrays
// let map = new Map([
//   [ 1, 'one' ],
//   [ 2, 'two' ],
//   [ 3, 'three' ], // trailing comma is ignored
// ])
// console.log(map)
//
//
// // mapping and filtering
// let map0 = new Map()
//   .set(1, 'a')
//   .set(2, 'b')
//   .set(3, 'c');
//
// let map1 = new Map(
//     [...map0]  // returns a 2-dimension array [[k, v], [k, v]]
//     .filter(([k]) => k < 3)  // ([k, v]) is destructuring
//     .map(([k, v]) => [k * 2, '_' + v])
// ) // step 3
//
// console.log(map1.entries())
//
//
//
// // weakmaps are the same but aren't enumerable/iterable
// // Meaning, don't have related methods
// // And are garbage collected
//
//
//
