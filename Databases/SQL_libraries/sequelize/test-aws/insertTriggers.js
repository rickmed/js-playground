const seq = require('sequelize')

const db = new seq('postgres', 'rick', 'shania6542', {
  host: 'flexbot.cn8kbvybgayp.us-east-1.rds.amazonaws.com',
  dialect: 'postgres'
})


const db_function = `CREATE FUNCTION notify_changes() RETURNS trigger AS $notify_changes$
DECLARE
BEGIN
  IF TG_OP = 'INSERT' THEN
    PERFORM pg_notify(TG_TABLE_NAME, jsonb_build_object('new_val', row_to_json(NEW))::text);
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    PERFORM pg_notify(TG_TABLE_NAME, jsonb_build_object('old_val', row_to_json(OLD), 'new_val', row_to_json(NEW))::text);
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    PERFORM pg_notify(TG_TABLE_NAME, jsonb_build_object('old_val', row_to_json(OLD))::text);
    RETURN OLD;
  END IF;
END;
$notify_changes$ LANGUAGE plpgsql;`

const db_trigger = `CREATE TRIGGER changefeed AFTER INSERT OR UPDATE OR DELETE ON users
  FOR EACH ROW EXECUTE PROCEDURE notify_changes();`

const dropT = db.query(`DROP TRIGGER IF EXISTS changefeed ON users;`)
const drop = db.query(`DROP FUNCTION IF EXISTS notify_changes();`)
const func = db.query(db_function)
const trigger = db.query(db_trigger)

Promise.all([dropT, drop, func, trigger])
  .then( res => {
    console.log('succesful', res)
  })
  .catch( err => console.log(`ERRRORRR:`, err))
