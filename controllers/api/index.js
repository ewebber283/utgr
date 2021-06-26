const router = require('express').Router();

const apiRoutes = require('./');
const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');
const inventoryRoutes = require('./inventory-routes.js');


router.use('./api', apiRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);




module.exports = router;