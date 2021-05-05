
const mongoose = require('mongoose')
const schema = mongoose.Schema
const {ObjectId} = mongoose.Schema


const contactSchema = new schema({
    name: {
        type: String,
    },
    pseudo:{
        type:String
    },
    email: {
        type: String,
    },
    adress:{
        type : String
    },
    phone:{
        type:Number
    } ,
    user: {
        type: ObjectId,
        ref: 'User'
    }
})

module.exports = Contact = mongoose.model('contact', contactSchema)
