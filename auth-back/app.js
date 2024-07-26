const express = require('express');
const cors = require ('cors');
const app = express();
const mongoose = require('mongoose');
const  authenticate  = require('./auth/authenticate');

require('dotenv').config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

async function conexion(){
    await mongoose.connect(process.env.dbUrlConexion);
    console.log("Connected to Mongodb");
}

conexion().catch(console.error());

app.use('/api/login', require('./routes/login'));
app.use('/api/registrarse', require('./routes/registrarse'));
app.use('/api/user', authenticate, require('./routes/user'));
app.use('/api/refresh-token', require('./routes/refresh-token'));
app.use('/api/signout', require('./routes/signout'));
app.get('/', (req, res) =>{
    res.send("Hello world");
})

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});