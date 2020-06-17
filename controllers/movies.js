// ==================
// DEPENDENCIES
// ==================
const express = require('express')
const router = express.Router()
const Movie = require('../models/bookmark.js')


// ==================
// ROUTES
// ==================

// =POST=
// =======
router.post('/', (req,res) => {
  Movie.create(req.body, (err,movieAdd) => {
    res.json(movieAdd)
  })
})

// =DELETE=
// =======
router.delete('/:id', (req,res) => {
  Movie.findByIdAndRemove(req.params.id, (err,deletedMovie) => {
    res.json(deletedMovie)
  })
})


// =UPDATE=
// =======
router.put('/:id', (req,res) => {
  Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (req,updatedMovie) => {
      res.json(updatedMovie)

    })
  })

  // =INDEX=
  // =======
router.get('/', (req,res) => {
  Movie.find({}, (err,foundMovie) => {
    res.json(foundMovie)
  })
})


module.exports = router
