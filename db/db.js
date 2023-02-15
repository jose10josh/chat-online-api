const mongoose = require('mongoose');


async function connectDB(uri) {
  mongoose.set("strictQuery", false);
  await mongoose.connect(uri).then(
    () => { console.log("[db] Conectada correctamente")},
    err => { console.log('[error][db] Ocurrio un error: ' + err) }
  );
}

module.exports = {connectDB};