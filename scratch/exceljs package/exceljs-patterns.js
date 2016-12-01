'use strict'

let fs = require('fs')
let Excel = require('exceljs')
let wb = new Excel.Workbook()


let file = __dirname + '/../src/publicaciones-dummy.xlsx'

    let arr1 = fs.readFileSync(__dirname + '/../src/dummy.txt', 'utf8').split(' ')

    wb.xlsx.readFile(file)
    .then(function() {
      // wb.creator = 'Flexbot'
      // wb.lastModifiedBy = 'Flexbot'
      // wb.created = new Date(2015, 12, 17)
      // wb.modified = new Date()
      let ws1 = wb.getWorksheet(1)
        // let ws1row1 = ws1.getRow(1).values
        // console.log(ws1)
      var col1 = ws1.getColumn(1)
        // col1.header = arr1
      col1.eachCell(function(cell, rowNumber) {
        console.log('Row ' + rowNumber + ' = ' + cell.value)
      })
      ws1.eachRow(function(row, rowNumber) {
        if (rowNumber === 2) {
          return
        }
        console.log('Row ' + rowNumber + ' = ' + row.values)
        if (rowNumber === 3) {
          row.values = ['ejel']
        }
        return
      })

      ws1.eachRow(function(row, rowNumber) {
        if (rowNumber === 2) {
          return
        }
        console.log('Row ' + rowNumber + ' = ' + row.values)
      })
      console.log(ws1.getRow(3).values)
        // return wb.xlsx.writeFile(file)
    }).then(function() {
      console.log('Done!')
    })
