const router = require('express').Router()
const checkAuth = require('../../middlewares/auth.middlewares.js')

const { getAllUsers, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller')

router.get('/', checkAuth, getAllUsers)
router.get('/:id', checkAuth, getOneUser)
router.post('/', createUser)
router.put('/:id', checkAuth, updateUser)
router.delete('/:id', checkAuth, deleteUser)



module.exports = router