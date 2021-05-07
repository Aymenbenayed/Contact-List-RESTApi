
// require mongoose
const mongoose = require('mongoose') 


// Connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true})
        console.log('Mongoose is connected to DB ..')
    } catch (error) {
        console.log(error)
        console.error('Mongoose can not connect to DB !!')
    }
}
module.exports = connectDB