const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(express.static('public'))


const moviesController = require('./controllers/movies.js')
app.use('/movies', moviesController)

// favicon.ico error
app.use( function(req, res, next) {

  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204);
  }

  return next();

});

mongoose.connect('mongodb://localhost:27017/moviesmeancrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});



app.listen(3000,() =>{
  console.log("listening...");
