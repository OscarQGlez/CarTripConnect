const Origin = require('../models/origin.model')

async function getAllOrigins(req, res) {
    try {
        const origins = await Origin.findAll()
        if (origins) {
            return res.status(200).json(origins)
        } else {
            return res.status(404).send('No origins found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneOrigin(req, res) {
    try {
        const origin = await Origin.findByPk(req.params.id)
        if (origin) {
            return res.status(200).json(origin)
        } else {
            return res.status(404).send('Origin not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOrigin(req, res) {
    console.log(req.body)
    try {
        const origin = await Origin.create(req.body)
        return res.status(200).json({ message: 'Origin created', origin: origin })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateOrigin(req, res) {
    try {
        const [originExist, origin] = await Origin.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (originExist !== 0) {
            return res.status(200).json({ message: 'Origin updated', origin: origin })
        } else {
            return res.status(404).send('Origin not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteOrigin(req, res) {
    try {
        const origin = await Origin.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (origin) {
            return res.status(200).json('Origin deleted')
        } else {
            return res.status(404).send('Origin not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllOrigins,
    getOneOrigin,
    createOrigin,
    updateOrigin,
    deleteOrigin,

}