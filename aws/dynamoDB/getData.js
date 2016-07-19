// import AWS from 'aws-sdk'
var AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'
// Credentials are loaded from ~/.aws/Credentials

const docClient = new AWS.DynamoDB.DocumentClient()

const params = {
  TableName: 'listings',
  Key: {
    flex_code: 'yesss'
  }
}

// async function getIt () {
//   try {
//     const item = await docClient.get(params).promise()
//     console.log('data returned: ', JSON.stringify(item.Item.epale, null, 2))
//   }
//   catch (err) {
//     console.log('can not put: ', err)
//   }
// }
//
// getIt()

docClient.get(params)
  .promise()
  .then( data =>
    console.log('data returned: ', JSON.stringify(data.Item.epale, null, 2))
  )
  .catch( err => console.log('can not put: ', err) )
