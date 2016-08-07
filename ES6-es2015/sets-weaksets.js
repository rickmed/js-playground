const mySet = new Set([1, 'epale'])

const myObj = {}
const myFunc = () => { console.log('Hi!')}

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
console.log('Values: ', mySet.values())
console.log('Keys: ', mySet.keys())
console.log('Entries: ', mySet.entries())

console.log('\n')
console.log('Values: ')
mySet.forEach( value => console.log(value) )


// convert to array
const arr = [...mySet]
console.log(arr)
