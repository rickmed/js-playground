var massive = require("massive");
var connectionString = "postgresql://rick:shania6542@flexbot.cn8kbvybgayp.us-east-1.rds.amazonaws.com:5432/myFirstDb";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var myFirstDb = massive.connectSync({ connectionString })

exports.myFirstDb = myFirstDb
