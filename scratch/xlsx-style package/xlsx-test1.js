'use strict'

let XLSX = require('xlsx-style')

// create dummy array
function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}
let myNumbers = []
let randomArray = (size) => {
  if (size === 0) return
  myNumbers.push(randomIntInc(1, 20))
  randomArray(size - 1)
}
randomArray(35)
// console.log(myNumbers)

// patterns
let workbook = XLSX.readFile(__dirname + '/../src/publicaciones-dummy.xlsx')
let ws1 = workbook.Sheets[workbook.SheetNames[0]]

console.log(ws1)


myNumbers.forEach((elem, index) => {
  let row = index + 1
  let cell = 'A' + row
  if (ws1[cell]) {
    ws1[cell].v = elem
  }
  ws1[cell] = {t: 'n', v: elem}
})
ws1['!ref'] = 'A1:E40'

console.log(ws1)
XLSX.writeFile(workbook, __dirname + '/../src/publicaciones-dummy.xlsx')

// cell A1 y { c: 0, r: 0 }


var cellref = XLSX.utils.encode_cell({c: C, r: R})
var cell = sheet[cellref]
cell.v = 'new Value'
