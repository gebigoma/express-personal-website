module.exports = {
  home: (req, res) => {
    res.json({ message: "Home" })
  }, 
  about: (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
  }, 
  contact: (req, res) => {
    res.sendFile(`${__dirname}/views/contact.html`)
  }
}

// const handleRoot = (req, res) => {
// // express way of doing it, __dirname (specific starting point) plus views for asolute path
//   // res.sendFile(`${__dirname}/views/home.html`)
//   res.json({ message: "Home" })
//   // fs.readFile('views/home.html', (err, data) => {
//   //   res.writeHead(200, {'Content-Type': 'text/html'});
//   //   res.write(data);
//   //   res.end(); 
//   // })
// }
// const handleAbout = (req, res) => {
//   res.sendFile(`${__dirname}/views/about.html`)
// }

// const handleContact = (req, res) => {
//   res.sendFile(`${__dirname}/views/contact.html`)
// }

