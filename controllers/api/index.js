  
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const authorRoutes = require('./author-routes.js');
const inventoryRoutes = require('./inventory-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/author', authorRoutes);
router.use('/inventory', inventoryRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;