const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Games, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Games.findAll({
      attributes: [
        'id',
        'name',
        'notes',
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
        res.render('homepage', {
            games,
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

router.get('/games/:id', (req, res) => {
    Games.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'notes',
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
          res.status(404).json({ message: 'No games found with this id' });
          return;
        }

        const Games = dbGamesData.get({ plain: true });

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