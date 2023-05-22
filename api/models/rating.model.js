const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Rating = sequelize.define('rating', {
  
  user_id_qualifier: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  user_id_qualified: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

module.exports = Rating
