const router = require('express').Router();

//const apiRoutes = require('./');
const homeRoutes = require('../home-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const authorRoutes = require('./author-routes');
const commentRoutes = require('./comment-routes');

//router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/authors', authorRoutes);
router.use('/comments', commentRoutes);



module.exports = router;