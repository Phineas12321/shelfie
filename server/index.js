require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller.js')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/product/:id', ctrl.getOne)

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)


app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))