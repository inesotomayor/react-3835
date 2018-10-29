

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


app.listen(3000)
