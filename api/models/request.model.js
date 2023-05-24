const sequelize = require('../../db')
const { DataTypes } = require('sequelize')

const Request = sequelize.define('requests', {
    status: {
        type: DataTypes.STRING,

    }
})

module.exports = Request
