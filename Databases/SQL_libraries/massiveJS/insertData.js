const { myFirstDb } = require('./connection')

// myFirstDb.listings.find({habs: 1}, (err, res) => {
//
//   if (err) console.log('ERRROOR: ', err)
//
//   else console.log(res)
//
// })


myFirstDb.listings.findDoc(function (err, res) {

  if (err) console.log('ERRROOR: ', err)

  else console.log(res)

})
