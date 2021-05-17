const mongoose = require('mongoose')
const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/HOSTEL-MANAGEMENT-SYSTEM', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
        })
    
    .then(() => {
        console.log('successfully connected to database')
    })
    .catch((err) =>{
        console.log(err)
    })
}

module.exports = configureDB