const express = require('express');
const PORT = 8000;
const app = express();
const db = require('./config/mongoose');
const { options } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes'));

app.listen(PORT, (err)=>{
    if(err)
    {
        console.log('Error running app');
        return;
    }
    console.log(`App running on port: ${PORT}`);
});