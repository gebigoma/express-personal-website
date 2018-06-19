const
  express = require('express'),
  app = express(),
  PORT = 3000,
  fs = require('fs')

const routes = (req, res) => {
  const { method, url } = req;
  fs.readFile('views/home.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
  })
}

 const handleRoot = (req, res) => {
    res.send(`<h1>Hellooooo</h1>`)
  }
const handleAbout = (req, res) => {
  res.send(`<h1>About ME!</h1>`)
}
const handleContact = (req, res) => {
  res.send(`<h1>Call me, maybe</h1>`)
}

app.get('/', routes);
app.get('/about', handleAbout);
app.get('/contact', handleContact);




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

