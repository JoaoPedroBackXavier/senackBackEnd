import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

import app from './app'

// iniciar o servidor
app.listen(PORT, () => console.log("running in door " + PORT))
