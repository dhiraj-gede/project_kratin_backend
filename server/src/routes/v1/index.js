const router = require('express').Router();
const authRouter = require('./auth.route');
const patientRouter = require('./patient.route');
const exerciseRouter = require('./exercise.routes.js');

router.use('/auth', authRouter);
router.use('/patient', patientRouter);
router.use('/exercise', exerciseRouter);
module.exports = router;