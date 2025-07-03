const mongoose = require('mongoose');
const {MONGO_URI} = require('./server-config')

async function connectDB(){
   try {
     const connect = mongoose.connect(`${MONGO_URI}/lama`)
     return connect;
   } catch (error) {
        console.error(error)
   }
}

module.exports=connectDB;