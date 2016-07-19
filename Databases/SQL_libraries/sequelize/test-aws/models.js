const seq = require('sequelize')
const f = require('faker')


const db = new seq('postgres', 'rick', 'shania6542', {
  host: 'flexbot.cn8kbvybgayp.us-east-1.rds.amazonaws.com',
  dialect: 'postgres'
})




const User = db.define('users', {
  firstName: seq.STRING,
  lastName: seq.STRING,
  data: seq.JSONB
})


const Campaign = db.define('campaigns', {
  name: seq.STRING,
  country: seq.STRING,
  data: seq.JSONB
})


User.hasMany(Campaign)
Campaign.belongsTo(User)


function addFakeData (times, res) {
  if (times === 0) return Promise.resolve(res)
  else {
    return User.create({
      firstName: f.name.firstName(),
      lastName: f.name.lastName(),
      data: f.helpers.contextualCard()
    })
    .then( user => {
      user.createCampaign({
        name: f.lorem.words(),
        country: f.address.country(),
        data: f.helpers.contextualCard()
      })
      addFakeData(times - 1)
      console.log(times)
    })
  }
}

db.authenticate()
.then( () => {
  console.log('Connection succesful')
  return db.sync()
})
.then( res => {
  console.log('Tables created')
  console.log('adding data')
  addFakeData(1, res)
})
.then( () => console.log('data added'))
.catch( err => console.log('ERRORRRRR: ', err))
