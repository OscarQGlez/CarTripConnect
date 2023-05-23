const router = require('express').Router()

const { getAllDestinations, getOneDestination, createDestination, updateDestination, deleteDestination } = require('../controllers/destination.controller')

router.get('/', getAllDestinations)
router.get('/:id', getOneDestination)
router.post('/', createDestination)
router.put('/:id', updateDestination)
router.delete('/:id', deleteDestination)



module.exports = router