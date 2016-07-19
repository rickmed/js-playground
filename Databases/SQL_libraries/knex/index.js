// set knex connection pool

var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: 'flexbot.cn8kbvybgayp.us-east-1.rds.amazonaws.com',
    port: '5432',
    database: 'myFirstDb',
    user:     'rick',
    password: 'shania6542'
  },
})

exports.knex = knex
