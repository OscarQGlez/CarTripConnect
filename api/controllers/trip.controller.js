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

async function offerTrip(req, res) {
    try {
        const { originId, destinationId, departure_time, available_seats, vehicle_type, favorite_genre, languaje, driving_skills,
            pets_accepted, maximum_baggage } = req.body;

        // Realiza la lógica para crear y guardar un nuevo viaje en la base de datos
        const newTrip = await Trip.create(req.body);
        const user = await newTrip.setUsers(res.locals.user.id)

        return res.status(200).json(newTrip);
    } catch (error) {
        return res.status(500).send(error);
    }
}

// obtener todos los viajes con sus rating
async function searchAllTripsRatings(req, res) {
    try {
        const result = await Trip.findAll({
            include: [{ model: Rating }],
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

// anadir un viaje a un usuario
async function addUserTrip(req, res) {
    try {
        const trip = await Trip.findByPk(req.params.tripId);
        console.log(trip)
        console.log(res.locals.user.id)
        const user = await trip.setUsers(res.locals.user.id)
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).send('No trips available for the specified route and departure time');
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

//quiero contar con un sistema de retroalimentación bidireccional, permitiéndome tanto dar como recibir comentarios y calificaciones sobre la experiencia del viaje compartido, con el objetivo de mantener un entorno confiable y de calidad en la plataforma. 

async function provideFeedback(req, res) {
    try {
        const { user_id_qualifier, user_id_qualified, score, comments } = req.body;

        // Realiza la lógica para guardar el feedback en la base de datos
        const newRating = await Rating.create({
            user_id_qualifier: user_id_qualifier,
            user_id_qualified: user_id_qualified,
            score,
            comments
        });

        return res.status(200).json(newRating);
    } catch (error) {
        return res.status(500).send(error);
    }
}


module.exports = {
    getAllTrips,
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    searchAvailableTrips,
    offerTrip, 
    searchAllTripsRatings,
    addUserTrip,
    provideFeedback
    
}