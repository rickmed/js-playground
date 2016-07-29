const mySet = new Set([1, 'epale'])

const myObj = {}
const myFunc = () => {}

mySet.add('hi')
.add(myObj)
.add(myFunc)


console.log(mySet.has(1))
console.log(mySet.has('hi'))
console.log(mySet.has(myFunc))
console.log(mySet.delete('epale'), 'returns true if it existed')
console.log(mySet.delete('epa'), 'returns false if not existed')
console.log(mySet.size)
// mySet.clear()
// console.log(mySet.size)
console.log(mySet.values())
console.log(mySet.keys())
console.log(mySet.entries())

console.log('\n')
console.log('Values: ')
mySet.forEach( value => console.log(value) )


// convert to array
console.log([...mySet].length)
