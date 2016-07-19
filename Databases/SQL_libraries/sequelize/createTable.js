const { Articles } = require('./models.js')

const force = false

Articles.sync({force: force})  // +
.then( res => {
  console.log('table created', res)
})
.catch( err => console.log('ERRRROOORR:', err))


/*
+ creates table if not exists, force = drop table if exists.
Useful when you wan to change the model fast, so need to recreate the table.
 */
