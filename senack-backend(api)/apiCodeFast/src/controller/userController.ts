import { Request, Response } from 'express'

const fs = require('fs');

const data: string = "./dataBase.json"

export default {
    listUsers,
    registerUsers,
    editUser,
    deletUser
}

async function listUsers(req: Request, res: Response) {
        const jsonData = fs.readFileSync(data)
        res.send(JSON.parse(jsonData))
}
async function registerUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data)
    let content = JSON.parse(jsonData)
    let index: number = Object.keys(content).length
    content[index++] = req.body

    const values = JSON.stringify(content)

    fs.writeFileSync(data, values)

    res.status(201).send("registrado")
}
async function editUser(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data)
    
    const userId = req.params.id

    let content = JSON.parse(jsonData)

    content[userId] = req.body

    const values = JSON.stringify(content)

    fs.writeFileSync(data, values)

    res.send(`updated ${userId}`)

}
async function deletUser(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data)   
    const userId = req.params.id
    let content = JSON.parse(jsonData)
    delete content[userId]
    const values = JSON.stringify(content)
    fs.writeFileSync(data, values)
    res.send(`user witch id ${userId} has ben deleted`)
}



