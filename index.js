// Run `node index.js` in the terminal

const express = require('express');
const app = express();

app.listen(3000);
console.log('server started on port 3000');

app.get('/', (req, resp) => {
  resp.send({ name: 'Leonardo', lasName: 'Bagella' });
});

app.get('/abc/:pippo', (req, resp) => {
  resp.send(req.params.pippo);
});
