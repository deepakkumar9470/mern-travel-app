require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
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


// Set static folder
if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, './client/build')));
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'),(err)=>{
        res.status(500).send(err)
    });
});
}

// if (process.env.NODE_ENV === 'production') {
//     // Set static folder
//     app.use(express.static('./client/build'));
  
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//   }

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

