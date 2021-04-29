
const mongoose = require('mongoose')
const schema = mongoose.Schema



const userSchema = new schema({
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

module.exports = User = mongoose.model('user', userSchema)
