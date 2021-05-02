
const mongoose = require('mongoose')
const schema = mongoose.Schema



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
    } 
})

module.exports = Contact = mongoose.model('contact', contactSchema)
