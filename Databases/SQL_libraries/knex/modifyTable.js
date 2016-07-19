const { knex } = require('./index')

// drop columns
knex.schema.table('listings', (table) => {
  table.dropColumns('updated_at')
})
  .then( res => {
    console.log(res)
  })
  .catch( err => console.log('ERRORRR: ', err))

// delete columns constraints
knex.schema.table('listings', (table) => {
  table.dropUnique('flx_code')
})
  .then( res => {
    console.log(res)
  })
  .catch( err => console.log('ERRORRR: ', err))

// add columns.
knex.schema.table('listings', (table) => {
  table.jsonb('pictures')
})
  .then( res => {
    console.log(res)
  })
  .catch( err => console.log('ERRORRR: ', err))
