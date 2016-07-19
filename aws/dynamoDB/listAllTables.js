

var promisify = require("es6-promisify")
var AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'
// Credentials are loaded from ~/.aws/Credentials
var db = new AWS.DynamoDB()

const listTables = promisify(db.listTables, db)

listTables().then( res =>
  console.log(res.TableNames)
)
