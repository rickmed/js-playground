const Sequelize = require('sequelize')

var sequelize = new Sequelize('postgres', 'rick', 'shania6542', {
  host: 'myfirstrdsdb.cn8kbvybgayp.us-east-1.rds.amazonaws.com',
  dialect: 'postgres'
});

// query using raw language queries
sequelize.query('SELECT * FROM t1',
  { type: sequelize.QueryTypes.SELECT}) // return only data, not metadata
    .then( res => console.log(JSON.stringify(res, null, 2)))
