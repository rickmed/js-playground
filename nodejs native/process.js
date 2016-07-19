'use strict'

// various info about the running nodejs process
console.log('\n')
console.log('Executable Path: ' + process.execPath + '\n')
console.log('__dirname: ', __dirname, '\n')
console.log('__filename: ', __filename, '\n')
console.log('process.title: ', process.title, '\n')
console.log('process.cwd(): ', process.cwd(), '\n')
// console.log(process.env)

console.log('')

// the following is the same as console.log
let msg = 'whatsapp'
process.stdout.write(msg + '\n\n')

// in nodejs, console.log is a wrapper of the above, plus a new line
// if arguments passed, it adds to printed array
console.log('Process Arguments: ', process.argv, '\n')
console.log(process.argv.slice(1))

// keeps a process going and then it exits it
let count = 0
setInterval(() => {
  count++
  console.log('ejele ' + count)
  if (count > 4) {
    process.exit()
  }
}, 100)
