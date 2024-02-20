const express = require('express')
const app = express()
const { port } = require('./config')
const router = require('./routes/fetchBooks')

require('./db/mongo')

app.use('/', router)


app.listen(port)