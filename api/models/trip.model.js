const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Trip = sequelize.define('trip', {
  
  date: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vehicle_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favorite_genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lenguaje: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  driving_skill: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pets_accepted: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maximun_baggage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Trip
