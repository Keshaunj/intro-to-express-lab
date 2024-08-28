// server.js

const express = require('express');
const app = express();

app.get('/greetings/:christy' , (req, res) => {
    const user = req.params.christy;
    const greetingMessage = `Hello there, ${user}!`;
  res.send(greetingMessage);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
