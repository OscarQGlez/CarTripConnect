const User = require('../api/models/user.model')
const Trip = require('../api/models/trip.model')
const Rating = require('../api/models/rating.model')
const Origin = require('../api/models/origin.model')
const Destination = require('../api/models/destination.model')


const createRelations = async () => {
  User.hasMany(Trip)
  Trip.belongsTo(User)

  User.hasMany(Rating)
  Rating.belongsTo(User)

  User.hasMany(Rating)
  Rating.belongsTo(User)

  User.belongsToMany(Trip, { through: 'requests' })
  Trip.belongsToMany(User, { through: 'requests' })


  Destination.hasMany(Trip)
  Trip.belongsTo(Destination)

  Origin.hasMany(Trip)
  Trip.belongsTo(Origin)

  Trip.hasMany(Rating)
  Rating.belongsTo(Trip)

/*
// One to One
  Student.hasOne(ContactInfo)
  ContactInfo.belongsTo(Student)

  // One to Many

  Tutor.hasMany(Student)
  Student.belongsTo(Tutor)

  // Many to Many

  Student.belongsToMany(Class, { through: 'Student_Class' })
  Class.belongsToMany(Student, { through: 'Student_Class' })
*/
}

module.exports = createRelations
