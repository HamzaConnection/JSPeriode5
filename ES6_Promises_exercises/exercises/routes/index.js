var express = require('express');
var router = express.Router();
var byteModel = require('../ex1.js');
var fetchModel = require('../ex2.js');
var fetchAlbum = require('../ex3.js');
var stringManipulator = require('../ex4.js');


router.get('/', function (req, res, next) {
  res.render('index', { title: 'hey' });
  next()
});

router.get('/api/securerandoms', function (req, res, next) {
  byteModel.generateBytes(function (result) {
    res.send(JSON.stringify(result))
    next()
  })


});

router.get('/api/movieinfo/:id', function (req, res, next) {
  let id = req.params.id
  
  fetchModel.getPlanetforFirstSpeciesInFirstMovieForPerson(id, function (result) {
  res.send(result)
  next()
  })

}); 

router.get('/api/album/:wordCount', function (req, res, next) {
  let wordCount = req.params.wordCount
  
  fetchAlbum.getAlbumInfo(function (result) {
    res.send(result)
    
    
  },wordCount)
  

}); 


module.exports = router;

