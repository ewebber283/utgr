//const { Utils } = require('sequelize/types');
const { Post } = require('../models');

const postData = [
  {
    title: 'Sea Of Thieves',
    author_id: 1,
    post_url: 'seaofthieves@ut.com',
    post_text: 'This game is great'
  },
  {
    title: 'Assassins Creed Valhalla',
    author_id: 2,
    post_url: 'creed@ut.com',
    post_text: 'This game is also great'
  },
  {
    title: 'Forza Horizons 5',
    author_id: 3,
    post_url: 'forza@ut.com',
    post_text: 'This game is so great'
  },
  {
    title: 'Fortnite',
    author_id: 4,
    post_url: 'fortnite@ut.com',
    post_text: 'This game is meh'
  }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;