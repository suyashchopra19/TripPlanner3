const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Itinerary = require("../models").Itinerary;
// const buildAttractionAsset = require('../../client/index.js');

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});



router.get('/itineraries/:id',(req, res, next)=>{
  // console.log(req.params.id);
  Itinerary.findById(req.params.id,{
    include:[{all:true, nested:true}]
    })
  .then((acts)=>{
    res.json(acts)
    })
})

router.post('/itineraries/',(req, res, next)=>{
  console.log(req.body);
  Itinerary.findOrCreate({
    where: {id: req.body.itineraryId}})
  .then((newItin)=>{
    res.json(newItin)
    })
})
module.exports = router;
