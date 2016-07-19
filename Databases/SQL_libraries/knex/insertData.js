const { knex } = require('./index')

knex('listings')
  .insert({
    flx_code: '217842349-99',
    habs: 6,
    pictures: {
      id: '1',
      url: '372dsfs298321.com',
      yes: 876
    }
  })
  .returning('*')  // pg's returns all the inserted values
  .then( res => {
    console.log(res)
    return knex('listings').select()
  })
  .then( res => {
    console.log(res[res.length - 1].pictures.url)
  })
  .catch( err => console.log('ERRORRR: ', err))
