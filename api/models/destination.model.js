const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Destination = sequelize.define('destination', {
    location: {
    type: DataTypes.STRING,
    allowNull: false,
     },
})

module.exports = Destination