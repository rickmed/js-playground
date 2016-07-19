
// prints all rows of an excel worksheet
var print = (function () {
  function allRows(worksheet) {
    worksheet.eachRow(function (row, rowNumber) {
      console.log('Row ' + rowNumber + ' = ' + row.values)
    })
  }

  return {
    allRows: allRows
  }

})()

module.exports = print
