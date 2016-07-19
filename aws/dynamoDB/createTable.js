var AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'

// Credentials are loaded from ~/.aws/Credentials
const dynanodb = new AWS.DynamoDB()

const params = {
  TableName: 'nameX',
  KeySchema: [
    { AttributeName: 'flex_code', KeyType: 'HASH'} // HASH = partition key
  ],
  AttributeDefinitions: [
    { AttributeName: 'flex_code', AttributeType: 'S'} // string
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 4,
    WriteCapacityUnits: 4
  }
}


dynanodb.createTable(params, (err, data) => {
  if (err) console.log('ERRRORR: ', err)
  else console.log(data)
})
