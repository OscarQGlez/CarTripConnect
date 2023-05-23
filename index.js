//instalados
  // npm init - y
  //npm i
  //npm i nodemon
  //npm i express
  //npm i dotenv
  //npm i mysql2
  //npm i sequelize
  //npm i bcrypt
// npm i jsonwebtoken

 // no instalaldos
    //npm i cors
    //npm i morgan
    
    


require('dotenv').config()
const express = require('express')

const sequelize = require('./db')
const createRelations = require('./db/relationships')

const router = require('./api/routes')

const app = express()

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    createRelations()
    await sequelize.sync({ alter: true })
  } catch (error) {
    console.log(error)
    throw new Error('Cannot connect to DB')
  }
}

const start = async () => {
  
  try {

    app.use(express.json())
    //app.get('/api', (req, res) => res.send('Welcome to CarTripConnect API'))
    app.use('/api', router)
    await app.listen(process.env.PORT || 2222)
    await connectDB()
    console.info(`CarTripConnect API running on port ${process.env.PORT}`)

  } catch (error) {

    console.log(error)
    throw new Error(`Cannot start server on ${process.env.PORT}`)
  }
}

start()
