const router = require('express').Router()

const { getAllTrips, 
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    getAllTripEager } = require('../controllers/trip.controller')

router.get('/', getAllTrips)
router.get('/:originId/:destinationId', getAllTripEager)
router.get('/:id', getOneTrip)
router.post('/', createTrip)
router.put('/:id', updateTrip)
router.delete('/:id', deleteTrip)


module.exports = router