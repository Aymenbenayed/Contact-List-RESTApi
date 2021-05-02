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
app.use("/api/user", require("./routes/user"));
app.use('/api/contacts', require('./routes/contact'))




/*sendgrid contact us */

/*****sendmail (contact us )********* */
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{api_key:process.env.SENDGRID_API}}))
app.post('/send', (req, res) => {
        const { name , phone , email, message ,subject } = req.body
        console.log(req.body)
        transporter.sendMail({
        to:'laymen.bnmohamed@gmail.com',
        from: 'laymen.bnmohamed@gmail.com',
        subject:subject,
        html:`
        <h1> Email:<br></h1>
        <h1> ${email}</h1>
        <h1>Full Name: <br></h1>
        <h2>${name}</h2>
        <h1>Phone:<br></h1>
        <h2>(+216)${phone}</h2>
        <h2>Message:<br></h2>
        <p>${message}</p>`})
        .then(resp => {
        res.json({resp})
        })
        .catch(err => {
        console.log(err)
        })})


if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'))
    const path=require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
    })
}

//4- create server 
const PORT = process.env.PORT
app.listen (PORT, error => error ? console.error(`can not connect to server : ${error}`)
: console.log(`Server is running on port ${PORT} ...`)
)