"use strict"

let Exceljs = require("exceljs")
let print = require('./print.js')

let wordsArr1 = require("./../../resources/dummyArray1")
let loremArr2 = require("./../../resources/dummyArray2")
let pubs = []

pubs.push(wordsArr1, loremArr2)


let file = __dirname + "./../../resources/publicaciones-dummy2.xlsx"
let wb = new Exceljs.Workbook()

wb.xlsx.readFile(file)
.then(function () {

    // console.log(wb);
    let ws1 = wb.getWorksheet('Mis Publicaciones')
    ws1.getRow(1).values = null
    print.allRows(ws1)

    // wb.eachSheet(function(worksheet, sheetId) {
    //     console.log(worksheet.id, ' ', worksheet.name);
    // })
    // console.log(ws1);
    //
    //
    // ws1.getRow(1).values = pubs[1]
    //
    // print.allRows(ws1)

    // this is how you properly chain promises
    return wb.xlsx.writeFile(file)
})
.then(() => console.log("Done writing excel file"))
