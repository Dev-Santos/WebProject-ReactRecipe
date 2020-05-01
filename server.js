const express = require('express');
const app = express();

app.use(express.json());

//Imported database connection object 
const db = require('./config/database');

//Imported User model used to create a user in the database
const User = require('./models/User');

//If the database is connected successfully
db.authenticate()
    .then(()=>console.log('Database connected'))
    .catch(err => console.log('Error: ' + err));//If the database is not connected successfully


//Backend route to send user details to the back-end database
app.post('/', (req, res) => {
      
    //Take the name field from the input request
    const { name } = req.body;

    // If the field is not present in the request body
    if(!name){
        res.status(500).json({msg: 'Please enter all fields'});
    }

    //Otherwise we can create a user record using the model (line 10) and it is sent to the back-end database (MySQL)
    User.create({name})
    .then( user => res.status(200).json(user))
    .catch( err => res.status(500).json(err));//If an error is caught

});

const port = process.env.PORT || 81;

app.listen(port, function() {
    console.log("Listening");
});