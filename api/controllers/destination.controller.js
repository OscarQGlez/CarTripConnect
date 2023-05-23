const Destination = require('../models/destination.model')

async function getAllDestinations(req, res) {
    try {
        const destinations = await Destination.findAll()
        if (destinations) {
            return res.status(200).json(destinations)
        } else {
            return res.status(404).send('No destinations found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneDestination(req, res) {
    try {
        const destination = await Destination.findByPk(req.params.id)
        if (destination) {
            return res.status(200).json(destination)
        } else {
            return res.status(404).send('Destination not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createDestination(req, res) {
    console.log(req.body)
    try {
        const destination = await Destination.create(req.body)
        return res.status(200).json({ message: 'Destination created', destination: destination })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDestination(req, res) {
    try {
        const [destinationExist, destination] = await Destination.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (destinationExist !== 0) {
            return res.status(200).json({ message: 'Destination updated', destination: destination })
        } else {
            return res.status(404).send('Destination not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteDestination(req, res) {
    try {
        const destination = await Destination.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (destination) {
            return res.status(200).json('Destination deleted')
        } else {
            return res.status(404).send('Destination not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllDestinations,
    getOneDestination,
    createDestination,
    updateDestination,
    deleteDestination,

}