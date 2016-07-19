const { Articles } = require('./models.js')

Articles.create({   // inserts an article.
  author: 'Ricardo Medina',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus id quibusdam hic temporibus tempora est, ad eum, quia necessitatibus, consequuntur quasi veniam odio alias assumenda sed. Fugit reiciendis, quos esse!',
  topic: 'Tech'
})
.then( res => console.log('article inserted', res))
.catch( err => console.log('ERRRROOORR:', err))


Articles.bulkCreate([
  {   // inserts an article.
    author: 'Jose Medina',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus id quibusdam hic temporibus tempora est, ad eum, quia necessitatibus, consequuntur quasi veniam odio alias assumenda sed. Fugit reiciendis, quos esse!',
    topic: 'cars'
  },
  {   // inserts an article.
    author: 'Maria Rod',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus id quibusdam hic temporibus tempora est, ad eum, quia necessitatibus, consequuntur quasi veniam odio alias assumenda sed. Fugit reiciendis, quos esse!',
    topic: 'flowers'
  }
], {
  validate: true
})
.then( res => console.log('articles inserted', res.dataValues))
.catch( err => console.log('ERRRROOORR:', err))
