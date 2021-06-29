const router = require('express').Router();

//const apiRoutes = require('./');
const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const inventoryRoutes = require('./inventory-routes.js');
const authorRoutes = require('./author-routes');

//router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/posts', postRoutes);
router.use('/authors', authorRoutes);



module.exports = router;