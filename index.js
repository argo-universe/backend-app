const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(getRandomQuote() )
})

function getRandomQuote() {
    const quotes = [
      "The best way to predict the future is to create it. - Abraham Lincoln",
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "You miss 100% of the shots you don't take. - Wayne Gretzky"
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})