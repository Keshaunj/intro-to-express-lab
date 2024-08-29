// server.js

const express = require("express");
const app = express();
const shoes = require("./shoes");
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
app.get("/collectibles/:index",(req,res) =>{
  res.send("this route is under construction.")
});

//number 4  //min price
app.get('/shoes', (req,res)=> {
  let filterShoes = shoes;
 
  if(req.query['min-price']){
    const minPrice = parseFloat(req.query['min-price']);
    filterShoes = filterShoes.filter(shoe => shoe.price >= minPrice);


  }
  //max price 
    if(req.query['max-price']){
    const maxPrice = parseFloat(req.query['max-price']);
    filterShoes = filterShoes.filter(shoe => shoe.price <= maxPrice);

  }
//filter
if(req.query.type){
  const type = req.query.type.toLowerCase();
  filterShoes = filterShoes.filter(shoe => shoe.type.toLowerCase() === type);
  // the responce
  res.json(filterShoes);

}
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
});