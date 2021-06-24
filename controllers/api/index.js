const router = require('express').Router();

const apiRoutes = require('./');
const homeRoutes = require('./home-routes');
const inventoryRoutes = require('./inventory-routes.js');


router.use('./api', apiRoutes);
router.use('/', homeRoutes);
router.use('/inventory', inventoryRoutes);




module.exports = router;