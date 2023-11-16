const express = require('express').Router();
const { json } = require('express');
const fs = require('fs');
const uuid = require('../helpers/uuid');
//will retrieve user data and set it into userData
var userData = JSON.parse(fs.readFileSync('./db/db.json', { encoding: 'utf8' }));

//gets routes for notes
express.get('/notes', (req, res) => {
    res.json(userData);
});

//post route for adding the new notes as well as saving it
express.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const notesWId = {
            title,
            text,
            id: uuid(),// if clicked this id will help page display clicked notes
        };
        userData.push(notesWId);
        //will write string to file
        fs.writeFileSync('./db/db.json', json.strigify(userData), (err) => {
            if (err) {
                throw err //if there happens to be an error along the way it is thrown to screen
            }
        });
        res.json(userData);
    }

});

module.exports = express;