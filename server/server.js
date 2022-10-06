const express = require('express')
const cors = require('cors')

// internal modules
const dbConnect = require('./config/db')
const {PORT} = require('./config/index')
const todoRouter = require('./routes/todoRouter')


const app = express()
dbConnect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
app.use('/', todoRouter)

app.listen(PORT, () =>  console.log('server running on port ' + PORT))