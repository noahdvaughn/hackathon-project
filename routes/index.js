const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/create-park', controllers.createPark)
router.post('/create-ride/:park_id', controllers.createRide)
router.get('/all-parks', controllers.getAllParks)
router.put('/edit-park/:id', controllers.editPark)
router.delete('/delete-park/:id', controllers.deletePark)
router.get('/get-park/:id', controllers.getParkById)
router.get('/get-ride-by-park-id/:park_id', controllers.getRideByParkId)
router.delete('/delete-ride/:id', controllers.deleteRide)

module.exports = router
