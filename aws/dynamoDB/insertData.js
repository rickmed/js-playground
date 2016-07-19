var AWS = require('aws-sdk')
AWS.config.region = 'us-east-1'

// Credentials are loaded from ~/.aws/Credentials
const docClient = new AWS.DynamoDB.DocumentClient()


var params = {
  TableName: 'listings',
  Item: {
    flex_code: 'yesss',
    meta_id: 'row-dsad3213',
    test: ['ten', 'two', 'one'],
    epale: [
      {
        what: 3213,
        yes: false,
        hello: [
          false, true
        ]
      }
    ],
    hi: 2323
  },
  // ConditionExpression: 'attribute_not_exists(meta_id)',  // if an attribute exist do not overwrite item, it errs
  ReturnConsumedCapacity: 'TOTAL',
  ReturnItemCollectionMetrics: 'SIZE',
  ReturnValues: 'ALL_OLD'   // if an item is overwritten, it will return the old values, if a new item was created, it will return nothing.
};

docClient.put(params, function(err, data) {
  if (err) {
    console.error('ERRRORRR: ', err)
  }
  else {
    console.log("PutItem succeeded:", JSON.stringify(data, null, 2));
  }
});
