const fs = require('fs')

const file = './resources/dummy.txt'

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) console.log('ERRRORRR: ', err)
//   fs.writeFile(file, data + 'hello this is data', err => {
//     if (err) console.log('ERRRORRR: ', err)
//     else console.log('file written!')
//   })
// })
//

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) console.log('ERRRORRR: ', err)
//   else console.log(data)
// })


// fs.stat(__dirname + '/thisDir', (err, stats) => {
//   if (err) console.log(err)
//   if (stats.isFile()) console.log('its a file!');
//   if (stats.isDirectory()) console.log('its a directory!');
// })

const dir = __dirname + '/dummyDir'

// fs.mkdir(dir, err => {
//   if (err.code === 'EEXIST') {
//     console.log(err)
//     fs.writeFile(dir + '/file1', 'some dataaaa', (err, data) =>{
//       if (err) console.log('ERRRORRR: ', err)
//       else console.log(data)
//     })
//
//   }
// })

// fs.unlink(dir + '/file1', err => {
//   if (err) console.log(err)
//   fs.rmdir(dir, err => {    // remove dir
//     if (err) console.log(err)
//   })
// })  // remove file

fs.readdir('./yess', function (err, data) {
  if (err) console.log('ERRORRR: ', err);
  else console.log(data);
})
