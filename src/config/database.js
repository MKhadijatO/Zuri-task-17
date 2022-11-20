const mongoose = require ('mongoose');
const { config } = require('dotenv');

config ()

async function connect() {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Connected to MongoDb');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connect;