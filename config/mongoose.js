const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1/buyume_db`);

const db = mongoose.connection;

db.on('err', console.error.bind(console, 'Error connecting to mongodb'));
db.once('open', function(){
    console.log('Connected to database mongodb');
});

module.exports = db;