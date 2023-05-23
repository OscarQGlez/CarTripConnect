const router = require('express').Router()
const userRouter = require('./user.router.js')
const tripRouter = require('./trip.router')
const ratingRouter = require('./rating.router')
const originRouter = require('./origin.router')
const auth = require('./auth.router.js')
const destinationRouter = require('./destination.router')

router.use('/user', userRouter)
router.use('/trip', tripRouter)
router.use('/rating', ratingRouter)
router.use('/origin', originRouter)
router.use('/destination', destinationRouter)
router.use('/auth', auth)

module.exports = router 
module.exports = router 