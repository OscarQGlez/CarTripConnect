const router = require('express').Router()

const { getAllOrigins, getOneOrigin, createOrigin, updateOrigin, deleteOrigin } = require('../controllers/origin.controller')

router.get('/', getAllOrigins)
router.get('/:id', getOneOrigin)
router.post('/', createOrigin)
router.put('/:id', updateOrigin)
router.delete('/:id', deleteOrigin)



module.exports = router