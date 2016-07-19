const { Articles } = require('./models.js')

// Articles.findById(1)
//   .then( res => console.log('article found', res.dataValues))
//   .catch( err => console.log('ERRRROOORR:', err))


Articles.findAll()
  .then( res => {
    console.log('articles found: ')
    res.forEach( article => console.log(article.dataValues))
  })
  .catch( err => console.log('ERRRROOORR:', err))
