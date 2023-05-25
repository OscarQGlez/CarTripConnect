const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')
const { getAllRatings, getOneRating, createRating, updateRating, deleteRating } = require('../controllers/rating.controller')

router.get('/', getAllRatings)
router.get('/:id', getOneRating)
router.post('/', createRating)
router.put('/:id', updateRating)
router.delete('/:id', deleteRating)



module.exports = router