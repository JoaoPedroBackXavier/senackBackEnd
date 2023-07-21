const express = require('express')

import userController from "../controller/userController"

const router = express.Router()

// listar
router.get('/users', userController.listUsers)

/*
// cadastrar usuarios
router.post('/users', (req: any, res: any) =>
{
    const jsonData = fs.readFileSync(data)
    let content = JSON.parse(jsonData)

    // verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length
    content[index++] = req.body

    const values = JSON.stringify(content)

    fs.writeFileSync(data, values)

    res.status(201).send("registrado")
})

// editar usuarios
router.put('/user/:id', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data)
    
    const userId = req.params.id

    let content = JSON.parse(jsonData)

    content[userId] = req.body

    const values = JSON.stringify(content)

     fs.writeFileSync(data, values)

    res.send(`updated ${userId}`)

})

// deletar usuarios
router.delete('/user/:id', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data)   
    const userId = req.params.id
    let content = JSON.parse(jsonData)
    delete content[userId]
    const values = JSON.stringify(content)
    fs.writeFileSync(data, values)
    res.send(`user witch id ${userId} has ben deleted`)
})
*/
export default router