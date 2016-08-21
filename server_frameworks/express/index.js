const express = require('express')
const app = express()


app.use('/', (req, res, next) => {
  console.log(req.headers)
  // for (prop in req) {
  //   const patt = new RegExp('_')
  //   const res = patt.test(prop)
  //   if( res && 'function' !== typeof req[prop] )  {
  //     console.log(req[prop])
  //   }
  // }
  next()
})

app.get('/', (req, res) => {
  res.send('HELOOOOOOO')
})

const port = 4000

app.listen(port, () => {
  console.log('Express app started on port: ', port)
})
