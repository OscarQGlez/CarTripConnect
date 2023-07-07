const router = require('express').Router()

const checkAuth = require('../../middlewares/auth.middlewares')
const {                                                                         getAllTrips, 
    getOneTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    searchAvailableTrips,
    offerTrip,
    searchAllTripsRatings,
    addUserTrip,
    provideFeedback,
    getAllTripsEager } = require('../controllers/trip.controller')

router.get('/', getAllTrips)
router.get('/eager', getAllTripsEager)
router.get('/search',searchAvailableTrips)
router.get('/searchAllTripsRatings', searchAllTripsRatings)
router.get('/:id', getOneTrip)

router.post('/', createTrip)
router.post('/offerTrip',checkAuth, offerTrip)
router.post('/provideFeedback', checkAuth, provideFeedback)
router.post('/addUserTrip/:tripId', checkAuth, addUserTrip)

router.put('/:id', updateTrip)

router.delete('/:id', deleteTrip)

module.exports = router