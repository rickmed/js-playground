var pg = require ('pg')

var con_string = `postgres://rick:shania6542@flexbot.cn8kbvybgayp.us-east-1.rds.amazonaws.com/postgres`

var pg_client = new pg.Client(con_string)

pg_client.connect()

pg_client.query('LISTEN users', () => {
  console.log('running')
  pg_client.on('notification', res => {
    console.log(JSON.stringify(res, null, 2))
  })
})
