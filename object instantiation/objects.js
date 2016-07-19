'use strict'

let workbook = {
  created: undefined,
  modified: undefined,
  _worksheets: [{
    id: 1,
    name: 'Sheet',
    _rows: [Object],
    _columns: [Object],
    _keys: {},
    _merges: {},
    _workbook: [] },
    { id: 3,
      name: 'Sheet 2',
      _rows: [Object],
      _columns: [Object],
      _keys: {},
      _merges: {},
      _workbook: [] },
    { id: 4,
      name: 'Sheet 3',
      _rows: [Object],
      _columns: [Object],
      _keys: {},
      _merges: {},
      _workbook: []
  }],
  _xlsx: { workbook: [] },
  creator: undefined,
lastModifiedBy: undefined }

// console.log(workbook)
// console.log('================')
// let sheets = workbook._worksheets
// // console.log(sheets)
// sheets.splice(0, 1)
// console.log(workbook)

// returns list of all properties in object or child object
let objKeys = Object.keys(workbook)
console.log(objKeys)

// IDEM but also include non enumerable objects
let objNames = Object.getOwnPropertyNames(workbook['_xlsx'].workbook)
console.log(objNames)

// hasOwnProperty
let o = {}
o.prop = 'exists'

function changeO () {
    o.newprop = o.prop
    delete o.prop
}
o.hasOwnProperty('prop') // returns true
changeO()
o.hasOwnProperty('prop') // returns false
