//const { Utils } = require('sequelize/types');
const { Post } = require('../models');

const postData = [
  {
    title: 'Sea Of Thieves',
    genre: 'Adventure',
    review: 'This game is awesome@',
    user_id: 1,
    image: 'one'
  },
  {
    title: 'Assassins Creed Valhalla',
    genre: 'Action',
    review: 'A Fun time',
    user_id: 2,
    image: 'two'
  },
  {
    title: 'Forza Horizons 5',
    genre: 'racing',
    review: 'Racing is great!',
    user_id: 2,
    image: 'three'
  },
  {
    title: 'Fortnite',
    genre: 'Shooting',
    review: 'fortnite@ut.com',
    user_id: 3,
    image: 'four'
  }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;