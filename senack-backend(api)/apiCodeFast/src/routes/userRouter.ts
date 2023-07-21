const express = require('express')

import userController from "../controller/userController"

const router = express.Router()

// listar
router.get('/users', userController.listUsers)


// cadastrar usuarios
router.post('/users', userController.registerUsers)

// editar usuarios
router.put('/user/:id', userController.editUser)

// deletar usuarios
router.delete('/user/:id', userController.deletUser)

export default router