'use strict'

let spawn = require('child_process').spawn
let execP = process.execPath // node.exe complete path

// spawns a new child process. It can run node.exe or other programm. Like running on cmd "node ./child.js child".
setTimeout(() => {

  let child = spawn(execP, [__dirname + '/child-dummy.js', 'child'])
  // child.stdout is a readable stream. All these have the 'data' event from which you can listen
  child.stdout.on('data', (chunk) => {
    console.log('msg from child: ', chunk.toString())
    // process.exit(0)
  })


  // another way to IPC (inter process comm)
  let child2 = spawn(execP, [__dirname + '/child-dummy.js', 'child2'])
  child2.stdout.pipe(process.stdout)



}, 3000)

setInterval( () => console.log('father'), 1000)

//
// // another way to IPC (inter process comm)
// spawn(execP, [__dirname + '/child.js', 'child3'], {
//   stdio: 'inherit'
// })


// setInterval(() => {
// }, 1000)
