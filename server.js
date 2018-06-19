const
  express = require('express'),
  app = express(),
  PORT = 3000


const handleRoot = (req, res) => {
  res.send(`<h1>Hellooooo</h1>`)
}

app.get('/', handleRoot);




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

