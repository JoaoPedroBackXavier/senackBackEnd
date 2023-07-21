import { Request, Response } from 'express'

const fs = require('fs');

const data: string = "./dataBase.json"

async function listUsers(req: Request, res: Response) {
        const jsonData = fs.readFileSync(data)
        res.send(JSON.parse(jsonData))
}



export default {
    listUsers
}