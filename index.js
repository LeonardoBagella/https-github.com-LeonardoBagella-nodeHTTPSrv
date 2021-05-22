// Run `node index.js` in the terminal

const express = require('express');
const app = express();

app.listen(3000);
console.log('server started on port 3000');

app.get('/:idRaspberry', (req, resp) => {
  retrieveNextEvent(req.params.idRaspberry);
});

app.get('/rberry/:idRaspberry(^CAM[0-9]+)', (req, resp) => {
  retrieveNextEvent(req.params.idRaspberry);
});

function retrieveNextEvent(idRasp) {
  console.log(idRasp);
  return;
  // gestisci idRasp
}
