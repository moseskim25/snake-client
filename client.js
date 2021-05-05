const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('Connection successful');;
    conn.write('Name: MK');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 200);
  })

  conn.on('w', () => {
    conn.write('Move: up');
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};