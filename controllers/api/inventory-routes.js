const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Games, User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Games.findAll({
        where: {
          user_id: req.session.user_id
          },
        attributes: [
          'id',
          'name',
          'notes',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE games.id = vote.games_id)'), 'vote_count']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'games_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbGamesData => {
          const games = dbGamesData.map(games => games.get({ plain: true }));
          res.render('inventory', {games, loggedIn: true});
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

router.get('/games/:id', (req, res) => {
    Games.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'notes',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE games.id = vote.games_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'games_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbGamesData => {
        if (!dbGamesData) {
          res.status(404).json({ message: 'No game found with this id' });
          return;
        }

        const games = dbGamesData.get({ plain: true });

        res.render('single-games', {
            games,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

  module.exports = router;