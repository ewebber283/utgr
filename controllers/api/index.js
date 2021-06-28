const router = require('express').Router();

<<<<<<< HEAD
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const authorRoutes = require('./author-routes.js');
=======
const apiRoutes = require('./');
const homeRoutes = require('./home-routes');
const userRoutes = require('./user-routes');
>>>>>>> 03db96e1930967a9a2ada8c70e26f7454e635c71
const inventoryRoutes = require('./inventory-routes.js');


router.use('./api', apiRoutes);
router.use('/', homeRoutes);
<<<<<<< HEAD
router.use('/author', authorRoutes);
=======
router.use('/users', userRoutes);
>>>>>>> 03db96e1930967a9a2ada8c70e26f7454e635c71
router.use('/inventory', inventoryRoutes);




module.exports = router;