const router = require('express').Router()
const animalRoutes = require('../apiRoutes/animalRoutes')
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes')

//! how does this let our app know about the routes
router.use(animalRoutes);
router.use(zookeeperRoutes)

module.exports = router;