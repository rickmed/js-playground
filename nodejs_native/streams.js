'use strict'

let fs = require('fs')
let zlib = require('zlib')

// all these are async methods
let original = fs.createReadStream('/resources/dummy.txt')
let original2 = fs.createReadStream('/resources/dummy.txt', { encoding: 'utf8' })
let dummyWrite = fs.createWriteStream('/resources/dummyWrite.txt')
let compressed = fs.createWriteStream('/resources/dummy.txt.gz')

// 3 printing ways
original.on('data', (chunk) => {
  console.log(chunk.toString(), '\n')
})
original2.on('data', (chunk) => {
  console.log(chunk, '\n')
})
original.pipe(process.stdout)

// copy binaries
original.pipe(dummyWrite)

// gzip a file, demo of chaining pipe
var gzip = zlib.createGzip()
original.pipe(gzip).pipe(compressed)

// transform a text and place it on a file
let Transform = require('stream').Transform
let inherits = require('util').inherits

function ChangedText () {
  Transform.call(this)
}
inherits(ChangedText, Transform)

ChangedText.prototype._transform = function (chunk, enc, done) {
  chunk = chunk.toString().split(' ').filter(word => {
    return (word !== 'Cupidatat')
  }).join(' ')
  console.log(chunk)
  this.push(chunk)
  done()
}

original.pipe(new ChangedText()).pipe(dummyWrite)
