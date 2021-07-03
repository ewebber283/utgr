const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'title',
        'genre',
        'review',
        'user_id'
      ],
      // include: [
      //   {
      //     model: Comment,
      //     attributes: ['id', 'comment_text', 'posts_id', 'user_id', 'created_at'],
      //     include: {
      //       model: User,
      //       attributes: ['username']
      //     }
      //   },
      //   {
      //     model: User,
      //     attributes: ['username']
      //   }
      // ]
    })
      .then(dbPostsData => {
        const posts = dbPostsData.map(posts => posts.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

// get single post
router.get('/post/:id', (req, res) => {
  Comment.findOne(
    {
      title: req.body.title,
      body: req.body.post_text
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
      .then(dbCommentsData => {
        if (!dbCommentsData) {
          res.status(404).json({ message: 'No posts found with this id' });
          return;
        }

        const comments = dbCommentsData.get({ plain: true });

        res.render('single-post', {
            comments,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;