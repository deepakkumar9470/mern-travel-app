const router = require("express").Router();

const Pin = require('../models/Pins')


// @  /api/pins
router.post('/',  async (req,res) =>{
    const newpin = new Pin(req.body)
      try {
           const savePin = await newpin.save()
           res.status(201).json(savePin)
          
      } catch (error) {
        res.status(500).json(error)
      }
})



// /api/pins : Get all pins
router.get('/', async (req,res) =>{
    try {
      const pins = await Pin.find()
      res.status(200).json(pins)
    
      } catch (error) {
      res.status(500).json(error)
    }
})

module.exports = router
