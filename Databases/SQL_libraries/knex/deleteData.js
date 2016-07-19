const { knex } = require('./index')


knex('listings')
  .where('id', 3)
  .del()
  .then( affectedRows => {
    console.log(affectedRows)
  })
  .catch( err => console.log('ERRORRR: ', err))
