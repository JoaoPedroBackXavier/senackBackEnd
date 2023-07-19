// importa o express
const express = require('express')
// importa fyle system para manipular arquivos ( nao prescisa instalar antes de importar )
const fs = require('fs');
// variavel "data" recebe o banco de dados, nesse caso com fs
const data: any = "./dataBase.json"
//
let file = data
// instancia o express em uma variavel
const app = express()

// para o express utilizar o json
app.use(express.json())

// listar usuarios
app.get('/api/users', (req: any, res: any) =>
{
    const jsonData = fs.readFileSync(data)
    // analisa json e transforma pra objeto
    res.send(JSON.parse(jsonData))
})

// cadastrar usuarios
app.post('/api/users', (req: any, res: any) =>
{
    const jsonData = app.fs.readFileSync(data)
    let content = JSON.parse(jsonData)

    // verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length
    content[index++] = req.body

    const values = JSON.stringify(content)

    fs.writeFileSync(data, values)

    res.status(201).send("registrado")
})

// editar usuarios
app.put('/api/user:id', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data)
    
    const userId = req.params.id

    let content = JSON.parse(jsonData)

    content[userId] = req.body

    const values = JSON.stringify(content)

    fs.writeFileSync(data, values)

    res.send(`updated`)

})

// deletar usuarios
app.delete('/api/user:id', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data)   
    const userId = req.params.id
    let content = JSON.parse(jsonData)
    delete content[userId]
    const values = JSON.stringify(content)
    fs.writeFileSync(data, values)
    res.send(`user witch id ${userId} has ben deletedi`)
})





// 
export default {
    app,
}