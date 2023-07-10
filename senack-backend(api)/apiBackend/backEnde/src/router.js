const express = require('express')

const router = express.Router()

router.get('/users', (request, response) => {

    response.status(200).send("router esta funcionando")
})

module.exports = router;