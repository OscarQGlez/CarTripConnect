const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 100],
    }
  },
  address: {
    type: DataTypes.STRING,
   
  },
  phone: {
    type: DataTypes.STRING,
    
  },
  usertype: {
    type: DataTypes.STRING,
    defaultValue: "user"
  },
  genre: {
    type: DataTypes.STRING,
    
  },
  age: {
    type: DataTypes.DATE,
    
  }
})

module.exports = User
