import socketio from 'socket.io-client';

 const socket = socketio('http://192.168.100.140:3333', { 
   autoConnect: false,
 });

 function connect() {
  socket.connect();
 }

 function disconnect() {
   if(socket.connect){
    socket.disconnect();
   }
 }

 export {
   connect,
   disconnect,
 }