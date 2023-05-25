const Trip = require('../models/trip.model')
const User = require('../models/user.model')
const Origin = require('../models/origin.model')
const Destination = require('../models/destination.model')
const Rating = require('../models/rating.model')
const sequelize = require('../../db')
const { Op } = require('sequelize')


User, Origin, Destination, Rating

async function getAllTrips(req, res) {
    try {
        const trips = await Trip.findAll()
        if (trips) {
            return res.status(200).json(trips)
        } else {
            return res.status(404).send('No trips found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneTrip(req, res) {
    try {
        const trip = await Trip.findByPk(req.params.id)
        if (trip) {
            return res.status(200).json(trip)
        } else {
            return res.status(404).send('Trip not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createTrip(req, res) {
    console.log(req.body)
    try {
        const trip = await Trip.create(req.body)
        return res.status(200).json({ message: 'Trip created', trip: trip })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateTrip(req, res) {
    try {
        const [tripExist, trip] = await Trip.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (tripExist !== 0) {
            return res.status(200).json({ message: 'Trip updated', trip: trip })
        } else {
            return res.status(404).send('Trip not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteTrip(req, res) {
    try {
        const trip = await Trip.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (trip) {
            return res.status(200).json('Trip deleted')
        } else {
            return res.status(404).send('Trip not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getAllTripEager(req, res) {
    try {
        const result = await Trip.findAll({
            include: [Rating],
            where: {
                originId: req.params.originId,
                destinationId: req.params.destinationId
            }
        })
        if (result) {
            return res.status(200).json(result)
        } else {
            return res.status(404).send('No TRIP found')
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}
//buscar y ver viajes disponibles que se ajusten a mi ruta y horario
async function searchAvailableTrips(req, res) {
    try {
        const { originId, destinationId, departure_time } = req.body;
        const result = await Trip.findAll({
            where: {
                originId,
                destinationId,
                departure_time: { [Op.gte]: departure_time } 
            }
        });

        if (result.length > 0) {
            return res.status(200).json(result);
        } else {
            return res.status(404).send('No trips available for the specified route and departure time');
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}


//poder publicar y ofrecer viajes en los que esté dispuesto a compartir mi vehículo con otros pasajeros







module.exports = {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    getAllTripEager,
   searchAvailableTrips
}