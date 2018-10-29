// Equivale a "import express from 'express'"
let express = require('express')
var bodyParser = require('body-parser')
let users = require('./users')

let app = express()

// Middleware 'body-parser'
app.use(bodyParser.urlencoded({ extended: true }))

// Nuevo middleware
let checkToken = function(req, res, next) {
  // Chequear que exista el key 'token' ---> if (req.get('token'))
  // Chequear que el key 'token' tenga el value '123'
  if (req.get('token') === '123') {
    // Si cumple, avanzar
    return next()
  }
  // Sino, envía status de error específico
  res.sendStatus(401)
}

let checkIP = function(req, res, next) {
  console.log(req.ip)
  if (req.ip === '::3') {
    return next()
  }
  res.sendStatus(401)
}

// Usar el middleware a nivel global
app.use(checkToken)

// Root url + data entrante "req" / saliente "res"
app.get('/', checkIP, function(req, res) {
  // res.send(__dirname + '/public/index.html')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/users', function(req, res) {
  res.json({ total: users.length, users })
})

app.get('/users/:id', function(req, res) {
  let user = users.filter(user => {
    // No usar "===" sino "==" porque no coinciden en formato, aunque sí en valor:
    return user.id == req.params.id
  })
  res.json(user)
})

app.get('/books', function(req, res) {
  res.json([{ title: 'GET', description: 'Este es un método GET' }])
})
app.get('/books/:id', function(req, res) {
  res.json({
    id: req.params.id,
    search: req.query.search
  })
})
app.post('/books', function(req, res) {
  // res.json('Este es un método POST')
  res.json(req.body)
})

// Puerto de acceso a la comunicación con Express
app.listen(3000)
