import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

// iniciar o servidor
app.listen(PORT, () => console.log("running in door 3333"))
