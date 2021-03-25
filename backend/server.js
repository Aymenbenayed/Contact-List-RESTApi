//1-require express
const express = require('express')

//2-instance of express 
const app = express()

//4-require .env 
require('dotenv').config()

//7-Middleware
app.use(express.json())

// 5-conenct to DB 
const connectDB = require('./config/connectDB')
connectDB()

//6-Routes
app.use('/api/users', require('./routes/user'))

//4- create server 
const PORT = process.env.PORT
app.listen (PORT, error => error ? console.error(`can not connect to server : ${error}`)
: console.log(`Server is running on port ${PORT} ...`)
)