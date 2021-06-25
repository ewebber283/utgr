const router = require('express').Router();
const inventoryRoutes = require('./inventory-routes.js');
router.use('/inventory', inventoryRoutes);




module.exports = router;