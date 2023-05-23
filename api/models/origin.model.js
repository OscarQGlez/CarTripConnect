const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Origin = sequelize.define('origin', {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  town: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Origin


