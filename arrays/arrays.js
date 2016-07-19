'use strict'

let arr3 = new Array(10)
arr3.push('ejele')
// console.log('arr3: ', '\n', arr3)

let arr = [2, 3, 'superman', 'epale']
console.log('arr: ', '\n', dummyArray)

// console.log(typeof arr)
// console.log(Array.isArray(arr))
// console.log(arr)
// console.log(arr[2])
// console.log(arr.reverse())
// console.log(arr.length)

// arr[arr.length] = 'bat'
// console.log('hey: ' + arr)

// arr[9] = 'cat'
// console.log(arr)

// arr.push('whatever', 5)
// console.log('push: ', '\n', arr)

// arr.splice(0, 2)
// console.log('splice: ' + arr)

// arr.join(' ABC ')
// console.log(arr)

let concatArr = arr3.concat(dummyArray)
console.log('concat:', '\n', concatArr)

let concatArr2 = dummyArray.concat(arr3, dummyArray)
// console.log('concat 2:', '\n', concatArr2)
console.log('concat 2:', '\n', concatArr2.join(', '))

// slice creates an array copy
// console.log('slice')
// console.log('original: ', arr)
// let arr4 = arr.slice(0)
// arr4.push('yes')
// console.log('copy: ', arr4)
// console.log('original does not change: ', arr)

// setInterval(() => {
// }, 1000)
