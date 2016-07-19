const { knex } = require('./index')

knex.schema.dropTable('weather')
  .then( res => console.log(res) )
  .catch( err => console.log('ERRORRR: ', err))
