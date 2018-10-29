const Sequelize = require('sequelize')

const databaseConnection = new Sequelize('tienda_coderhouse', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

// Test de conexión:
// databaseConnection
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.')
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err)
//   })

const Productos = databaseConnection.define(
  'productos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
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

console.log(Productos)

// select * from productos where id = 1:
Productos.findById(1).then(producto => {
  // producto will be an instance of Productos and stores the content of the table entry
  // with id 1. if such an entry is not defined you will get null
  //   console.log(producto)
  console.log(producto.get('nombre'))
})

// Forma simplificada:
// const databaseConnection = new Sequelize('myswql://root:@localhost:3306/tienda')
