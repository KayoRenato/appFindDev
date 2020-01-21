const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calcuteDistance = require('./utils/calculateDistance');

const connections = [];

exports.setupWebsocket = (server) => {
  const io = socketio(server);
  
  io.on('connection', socket => {

    const { latitude, longitude, techs } = socket.handshake.query;
    // console.log(socket.handshake.query);

    connections.push({
      id: socket.id,
      coordinates:{
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    });
    // console.log(connections);
  });
};

exports.findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calcuteDistance(coordinates, connection.coordinates ) < 10
      && connection.techs.some(item => techs.includes(item))
  })
}