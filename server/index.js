const path = require('path');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/', (req, res) => {
  res.send('hello from the server!');
});

app.listen(PORT, () => {
  console.log('Server is listening,');
});
