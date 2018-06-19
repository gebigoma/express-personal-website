const
  express = require('express'),
  app = express(),
  PORT = 3000,
  fs = require('fs'),
  routes = require('./routes.js')



//  const handleRoot = (req, res) => {
//     res.send(`<h1>Hellooooo</h1>`)
//   }
// const handleAbout = (req, res) => {
//   res.send(`<h1>About ME!</h1>`)
// }
// const handleContact = (req, res) => {
//   res.send(`<h1>Call me, maybe</h1>`)
// }

app.get('/', routes.handleRoot);
app.get('/about', routes.handleAbout);
app.get('/contact', routes.handleContact);




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

