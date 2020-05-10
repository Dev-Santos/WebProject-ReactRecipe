const express = require('express');

const router = express.Router();

const notes = require('../model/notes');


//Back-end routes
router.get("/", (req, res)=>{

    notes.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error)
        });    
});

router.post('/save', (req, res)=>{
    const data = req.body;

    const newNote = new notes(data);

    newNote.save((error) => {
        if(error) {
            res.status(500).json({ msg: 'Internal server error, could not add data' });
            return;
        }        
        res.json({
            msg: 'Your data was added to the database...'
        });
    });    
});

router.get("/notes", (req, res)=>{
    const data = {
        username: 'items test page',
        testNum: 777
    };
    res.json(data);
});


module.exports = router;