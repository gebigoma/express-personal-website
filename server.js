const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  pagesController = require('./pagesController.js'),
  PORT = 3000

users = [
  {name: "Tina", 
  email: "tina@gmail.com",
  password: "password"}, 
  {name: "Jack",
  email: "jack@gmail.com", 
  password: "password"},
  {name: "Jesse",
  email: "jesse@gmail.com", 
  password: "password"}
]

app.use(logger('dev')) // logs in terminal when it's pinged the route, time to load

app.use(express.json())

// order that APP is starting, order matters, reading as a chain
app.get('/', pagesController.home);
app.get('/about', pagesController.about);
app.get('/contact', pagesController.contact);

app.get("/users/:index", (req, res) => {
  let index = req.params.index
  let user = users[index]
  res.json(user)
})

app.get("/users", (req, res) => {
  res.json(users)
})

app.post("/users", (req, res) => {
  users.push(req.body)
  res.json({ message: "data received." })
})

// err is specifc to the .listen method
app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
});

