const Trip = require('../models/trip.model')

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

module.exports = {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,

}