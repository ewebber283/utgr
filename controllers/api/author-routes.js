const router = require('express').Router();
const { Author }  = require('../../models');

router.get('/', (req, res) => {
    Author.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbAuthorData => res.json(dbAuthorData))
    .catch(err => {
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
            model: Post,
            attributes: ['id', 'author_name']
            }
    })
    .then(dbAuthorData => {
        if(!dbAuthorData) {
            res.status(404).json({ message: 'No author with this id'});
            return;
        }
        res.json(dbAuthorData)
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

