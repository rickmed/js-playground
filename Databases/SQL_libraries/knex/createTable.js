const { knex } = require('./index')


knex.schema.createTable('tableName', (table) => {
  table.increments()
  table.string('flx_code').unique()
  table.integer('habs')
  table.timestamps()
})
  .then( res => console.log(res) )
  .catch( err => console.log('ERRORRR: ', err))
