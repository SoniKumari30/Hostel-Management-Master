const express = require('express')
const router = express.Router() 
const { authenticateUser  } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const roomsController = require('../app/controllers/roomsController')
const staffsController = require('../app/controllers/staffsController')
const studentsController = require('../app/controllers/studentsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)

//private Route

router.get('/users/accounts',authenticateUser, usersController.account)
router.get('/users/students',authenticateUser,studentsController.list)
router.post('/users/students',authenticateUser,studentsController.create)
router.get('/users/students/:id',authenticateUser,studentsController.show)
router.put('/users/students/:id',authenticateUser,studentsController.update)
router.delete('/users/students/:id',authenticateUser,studentsController.destroy)

router.get('/users/staffs',authenticateUser,staffsController.list)
router.post('/users/staffs',authenticateUser,staffsController.create)
router.get('/users/staffs/:id',authenticateUser,staffsController.show)
router.put('/users/staffs/:id',authenticateUser,staffsController.update)
router.delete('/users/staffs/:id',authenticateUser,staffsController.destroy)

router.get('/users/rooms',authenticateUser,roomsController.list)
router.post('/users/rooms',authenticateUser,roomsController.create)
router.get('/users/rooms/:id',authenticateUser,roomsController.show)
router.put('/users/rooms/:id',authenticateUser,roomsController.update)
router.delete('/users/rooms/:id',authenticateUser,roomsController.destroy)


module.exports = router