// Equivale a "import express from 'express'"
let express = require('express')
var bodyParser = require('body-parser')

let app = express()
const Sequelize = require('sequelize')

// Middleware 'body-parser'
// Para que levante bien los datos de body de Postman!
app.use(bodyParser.urlencoded({ extended: true }))

// 1. Define la DB a la que se conecta
const databaseConnection = new Sequelize('tienda_coderhouse', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

// 2. Testear la conexión:
// databaseConnection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.')
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err)
//   })

// 3. Definir una constante que levanta la info de la DB en un objeto
const Productos = databaseConnection.define(
  'productos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.FLOAT
    },
    fecha_fabricacion: {
      type: Sequelize.DATE
    },
    marca_id: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
)

// 4. Traer todos los resultados
// ---> Ejemplo: localhost:3000/productos
app.get('/productos', (req, res) => {
  Productos.findAll().then(productos => {
    res.send(productos)
  })
})

// Agregar registro con Postman
app.post('/productos', (req, res) => {
  Productos.create(req.body).then(result => res.end(201))
})

// 5. Buscar según el id del registro que se pide de la DB y devolverlo
// ---> Ejemplo: localhost:3000/productos/5
app.get('/productos/:id', (req, res) => {
  Productos.findById(req.params.id).then(producto => {
    if (producto) {
      res.send(producto)
      res.end()
    } else {
      res.sendStatus(404)
    }
  })
})

// Puerto de acceso a la comunicación con Express
app.listen(3000)
