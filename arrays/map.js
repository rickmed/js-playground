'use strict'

let fs = require('fs')

let text = fs.readFileSync(__dirname + './../resources/dummy.txt', 'utf8')

// trim deletes the final line in a file
let ipsumArray = text.trim().split(' ')

let array1 = [
  {title: 'Item 1'},
  {title: 'Item 2',
    children: [
      {title: 'Sub-item 2.1'},
      {title: 'Sub-item 2.2'}
    ]
  },
  {title: 'Item 3'}
]

// transforms the array using map, x refers to the array.
let mapText = ipsumArray.map(x => x + ' hello')
let mapArray = array1.map(x => x.title + ' ejele')

console.log(array1)
console.log(text)
console.log('\n', ipsumArray)
console.log('\n', mapText)
console.log('\n', mapArray)

