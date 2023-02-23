const Park = require('../models/park')
const Ride = require('../models/ride')

const createPark = async (req, res) => {
  try {
    const park = await new Park(req.body)
    await park.save()
    return res.status(201).json({
      park
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const createRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllParks = async (req, res) => {
  try {
    const parks = await Park.find()
    return res.status(200).json({ parks })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const editPark = async (req, res) => {
  try {
    const park = await Park.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(park)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deletePark = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Park.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Park deleted')
    }
    throw new Error('Park not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getParkById = async (req, res) => {
  try {
    const { id } = req.params
    
    const park = await Park.findById(id)
    if (park) {
      return res.status(200).json({ park })
    }
    return res.status(404).send('Park with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getRideByParkId = async (req, res) => {
  try {
    const { park_id } = req.params
    const ride = await Ride.find({ park_id: `${park_id}` })
    if (ride) {
      return res.status(200).json({ ride })
    }
    return res.status(404).send('Ride with the specified name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteRide = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Ride.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Ride deleted");
      }
      throw new Error("Ride not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  createPark,
  getAllParks,
  editPark,
  deletePark,
  getParkById,
  createRide,
  getRideByParkId,
  deleteRide
}
