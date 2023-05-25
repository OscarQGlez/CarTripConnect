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
    provideFeedback } = require('../controllers/trip.controller')

router.get('/', getAllTrips)

router.get('/search',searchAvailableTrips)

router.get('/searchAllTripsRatings', searchAllTripsRatings)


router.get('/:id', getOneTrip)

router.post('/offerTrip',checkAuth, offerTrip)

router.post('/', createTrip)
router.post('/provideFeedback', provideFeedback)

router.post('/addUserTrip/:tripId', checkAuth, addUserTrip)

router.put('/:id', updateTrip)

router.delete('/:id', deleteTrip)

module.exports = router