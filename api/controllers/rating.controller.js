const Rating = require('../models/rating.model')

async function getAllRatings(req, res) {
    try {
        const ratings = await Rating.findAll()
        if (ratings) {
            return res.status(200).json(ratings)
        } else {
            return res.status(404).send('No ratings found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneRating(req, res) {
    try {
        const rating = await Rating.findByPk(req.params.id)
        if (rating) {
            return res.status(200).json(rating)
        } else {
            return res.status(404).send('Rating not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createRating(req, res) {
    console.log(req.body)
    try {
        const rating = await Rating.create(req.body)
        return res.status(200).json({ message: 'Rating created', rating: rating })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateRating(req, res) {
    try {
        const [ratingExist, rating] = await Rating.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (ratingExist !== 0) {
            return res.status(200).json({ message: 'Rating updated', rating: rating })
        } else {
            return res.status(404).send('Rating not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteRating(req, res) {
    try {
        const rating = await Rating.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (rating) {
            return res.status(200).json('Rating deleted')
        } else {
            return res.status(404).send('Rating not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRatings,
    getOneRating,
    createRating,
    updateRating,
    deleteRating,

}