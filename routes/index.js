const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.post('/create-park', controllers.createPark)
router.get('/all-parks', controllers.getAllParks)
router.put('/edit-park/:id', controllers.editPark)
router.delete('/delete-park/:id', controllers.deletePark)

module.exports = router
