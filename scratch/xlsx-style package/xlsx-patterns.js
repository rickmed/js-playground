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
randomArray(20)

let workbook = XLSX.readFile(__dirname + '/../src/publicaciones-dummy.xlsx', {cellStyles: true})

let ws1 = workbook.Sheets[workbook.SheetNames[0]]
// console.log(ws1.A1.v)
// console.log('-----------')
// console.log(ws1)

console.log(ws1)

// for (var h in ws1) {
//   console.log(ws1[h].v)
// }
// ws1.A1.v = 'Lenovo'

XLSX.writeFile(workbook, __dirname + '/../src/publicaciones-dummy.xlsx')
console.log('Saved!')

let sheet_name_list = workbook.SheetNames
sheet_name_list.forEach(function (y) { /* iterate through sheets */
  let worksheet = workbook.Sheets[y]
  for (let z in worksheet) {
    /* all keys that do not begin with "!" correspond to cell addresses */
    // if (z[0] === '!') continue
    console.log(y + ': ' + z + ' = ' + worksheet[z].v)
  }
})

// -----------------------

var sheet = workbook.Sheets[workbook.SheetNames[0]] // get the first worksheet
/* loop through every cell manually */
var range = XLSX.utils.decode_range(sheet['!ref']) // get the range
for (var R = range.s.r; R <= range.e.r; ++R) {
  for (var C = range.s.c; C <= range.e.c; ++C) {
    /* find the cell object */
    var cellref = XLSX.utils.encode_cell({c: C, r: R}) // construct A1 reference for cell
    if (!sheet[cellref]) continue // if cell doesn't exist, move on
    var cell = sheet[cellref]

    /* if the cell is a text cell with the old string, change it */
    if (!(cell.t === 's' || cell.t === 'str')) continue // skip if cell is not text
    if (cell.v === 'oldtext') cell.v = 'newtext' // change the cell value
  }
}
