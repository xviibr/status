const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`รันติดแล้วไอสัส`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;

