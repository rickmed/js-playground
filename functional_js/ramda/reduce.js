const { mergeWith, reduce, concat } = require('ramda')

const [arr1, arr2, arr3, arr4] = [[1, 3], [5, 8], [11, 13], [15, 17]]


const fn = (acc, val) => {
  console.log('acc: ', acc)
  console.log('val: ', val)
  return [...acc, ...val]
}

var obj1 = [{ a: arr1 }, { a: arr2 } ]

var obj2 = [{ a: arr3 }, { a: arr4 } ]

var obj3 = {
  a: arr3
}


// reduce(iteratee)(acc)(arr|obj)


const mergeConcat = reduce(mergeWith(concat))

// Each obj will be merged (with concat fn) and return as the acc
// so the the obj will be concatenated, etc.
const res = mergeConcat(obj1)(obj2)




console.log(res)
console.log(obj1)

// const sum = (acc, val) => acc + val
// const data = [1, 2, 3]
// const sumNumsFrom = reduce(sum, 0)
// // -> 6
// console.log(sumNumsFrom(data))
