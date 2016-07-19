const Sequelize = require('sequelize')

var db = new Sequelize('postgres', 'rick', 'shania6542', {
  host: 'myfirstrdsdb.cn8kbvybgayp.us-east-1.rds.amazonaws.com',
  dialect: 'postgres'
})

const Blog = db.define('Blog', {
  owner: Sequelize.string,
  country: Sequelize.string
})

const Articles = db.define('Article', {  // schema name
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  topic: Sequelize.STRING
})

module.exports = { Articles }
