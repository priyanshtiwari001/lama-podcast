const express = require('express');

// const { InfoController } = require('../../controllers');
const projectRoute = require('./project-routes')
const userRoute = require('./user-routes')
const router = express.Router();

router.use('/projects',projectRoute);
router.use('/auth',userRoute)

// router.get('/info', InfoController.info);

module.exports = router;