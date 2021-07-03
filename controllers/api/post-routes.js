  
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'genre', 'review', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['username'],
                },
            },
            {
              model: User,
              attributes: ['username'],
            },
        ],
      })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
          res.status(500).json(err);
      });
})

router.get('/:id', (req, res) => {
  Post.findOne({
    attributes: ['id', 'title', 'genre', 'review', 'created_at'],
    include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username'],
            },
        },
        {
          model: User,
          attributes: ['username'],
        },
    ],
  })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        genre: req.body.genre,
        review: req.body.review,
        user_id: req.body.user_id
      })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title,
        genre: req.body.genre,
        review: req.body.review
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
