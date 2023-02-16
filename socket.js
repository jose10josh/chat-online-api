const sockerIO = require('socket.io');

const socket = {};

function connect(server) {
  socket.io = sockerIO(server);
}

module.exports = {
  connect,
  socket
}