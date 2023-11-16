const express = require('express').Router();
const path = require('path');
const api = require('./apiRoutes');
// const html = require('./htmlRoutes');
//sets middleware for api
express.use('/api', api);
// express.use('*', html);

express.get('/notes',(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// express.get('*',(req, res)=>{
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// });

module.exports = express;