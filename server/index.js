const express = require('express')
const configureDB = require('./config/database')
const routes = require('./config/routes')
const cors = require('cors')
const app = express()
const port = 3099

configureDB()
app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(port, () => {
    console.log('server is running on port', port)

})