require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001
const cors = require('cors')
const path = require('path')
const consola = require('consola')
const connectDB = require('./db/db');
const userRoute = require('./routes/user')
const pinRoute = require('./routes/pin')

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

// Connetion to db

const start =  async () =>{
    try {

        await connectDB(process.env.MONGO_CONNECT_URL)
        .then(() => consola.success('Mongodb connected...'))
        .catch(err => consola.error(err))
        
    } catch (error) {
        console.log(error)
    }
}

start()





app.listen(PORT, (req,res) =>{
    consola.success(`Server started at ${PORT}`)
})

