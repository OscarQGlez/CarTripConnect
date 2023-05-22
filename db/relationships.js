const User = require('../api/models/user.model')
const Trip = require('../api/models/trip.model')

const createRelations = async () => {
  User.hasMany(Task)
  Task.belongsTo(User)
}

module.exports = createRelations
