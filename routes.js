const fs = require('fs')

const handleRoot = (req, res) => {
  fs.readFile('views/home.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
  })
}
const handleAbout = (req, res) => {
  fs.readFile('views/about.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
  })
}
const handleContact = (req, res) => {
  fs.readFile('views/contact.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end(); 
  })
}

module.exports = {
  handleRoot, 
  handleAbout, 
  handleContact
}