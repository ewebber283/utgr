const { Post } = require('../models');

const postData = [
  {
    title: 'Sea Of Thieves',
    author_id: 1
  },
  {
    title: 'Assassins Creed Valhalla',
    author_id: 2
  },
  {
    title: 'Forza Horizons 5',
    author_id: 3
  },
  {
    title: 'Fortnite',
    author_id: 4
  }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;