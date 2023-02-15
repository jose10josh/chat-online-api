const mongoose = require('mongoose');


async function connectDB(uri, db_name) {
  mongoose.set("strictQuery", false);
  await mongoose.connect(uri, {dbName:db_name}).then(
    () => { console.log("[db] Conectada correctamente")},
    err => { console.log('[error][db] Ocurrio un error: ' + err) }
  );
}

module.exports = {connectDB};