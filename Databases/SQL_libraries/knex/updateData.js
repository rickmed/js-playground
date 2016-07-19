const { knex } = require('./index')


knex('listings')
  // .first()
  .where({id: 4})
  // .update('flx_code', 'ABCD')
  .update({
    flx_code: '#@#!GHB',
    habs: 1
  })
  .then( res => console.log('Rows affected: ', res) )
  .catch( err => console.log('ERRORRR: ', err))
