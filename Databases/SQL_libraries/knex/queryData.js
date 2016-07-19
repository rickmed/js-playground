const { knex } = require('./index')

knex('listings')
  // .first()
  .limit(2)
  .offset(1)
  // .where('id', '>=', 2)
  // .where('id', 22)
  // .pluck('pictures')
  // .select()
  .select('listings.id')
  .then( res => console.log(res) )
  .catch( err => console.log('ERRORRR: ', err))
  
