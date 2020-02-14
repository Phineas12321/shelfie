require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const SERVER_PORT = 400

const app = express()

app.use(express.json())

app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))