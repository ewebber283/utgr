//const { Utils } = require('sequelize/types');
const { Post } = require('../models');

const postData = [
  {
    title: 'Sea Of Thieves',
    genre: 'Adventure',
    review: 'This game is awesome!',
    user_id: 1
  },
  {
    title: 'Assassins Creed Valhalla',
    genre: 'Action',
    review: 'A Fun time',
    user_id: 2
  },
  {
    title: 'Forza Horizons 5',
    genre: 'racing',
    review: 'Racing is great!',
    user_id: 2
  },
  {
    title: 'Fortnite',
    genre: 'Shooting',
    review: 'fortnite@ut.com',
    user_id: 3
  }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;