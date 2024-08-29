// server.js

const express = require("express");
const app = express();
// number 1
app.get("/greetings/:christy", (req, res) => {
  const user = req.params.christy;
  const greetingMessage = `Hello there, ${user}!`;
  res.send(greetingMessage);
});
// roll route
app.get("/roll/:number", (req, res) => {
  const maxNumber = parseInt(req.params.number);

  if (isNaN(maxNumber)) {
    return res.status(400).send("You must specify a number.");
  }
  const rolledNumber = Math.floor(Math.random() * (maxNumber + 1));
  res.send(`You rolled a ${rolledNumber}.`);
});
//number 3
app.get("/collectibles/:index")
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
