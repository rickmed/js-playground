const { db } = require('./db_connection')

// Users
//
// id
// name
// email
//
// Campaigns
//
// id
// name
// country
//
// Landing Pages
//
// id
// url
//
// +1 Campaigns can use +1 LPs



const Users = db.schema.createTable('Users', (table) => {
  // table.increments('user_id') // automatically set as PK and unique, uses pg's serial type
  table.specificType('user_id', 'smallserial')
    .primary('Users_userid_pk')    // more easily with increments
  table.string('email').unique()
  table.string('name')
  table.timestamps()  // ads created_at and updated_at
})

const campaigns = db.schema.createTable('Campaigns', t => {
  t.increments('camp_id')
  t.string('name')
  t.string('country')
  t.string('user_id').references('Users.user_id')   // foreign key
})

// a lp must be assigned to one user_id
// not necessarilly to a campaign
const lps = db.schema.createTable('Landing_Pages', t => {
  t.increments('lp_id')
  t.string('name')
  t.string('url')
  t.integer('camp_id_fk').references('campaigns.camp_id')
})

// many campaigns can have many lps so need to create a bridge table

const camps_lps = db.schema.createTable('junc_Camps_Lps', t => {
  t.integer('camps_id_fk')
  t.integer('lps_id_fk')
})


Promise.all([Users, campaigns, lps])
  .then( res => console.log(res) )
  .catch( err => console.log('ERRORRR: ', err))
