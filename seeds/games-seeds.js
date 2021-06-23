const { Games } = require('../models');

const gamesData = [
  {
    name: 'Sea Of Thieves',
    type: 'Game',
  },
  {
    name: 'Assassins Creed Valhalla',
    type: 'Game',
  },
  {
    name: 'Forza Horizons 5',
    type: 'Game',
  },
 
];

const seedGames = () => Games.bulkCreate(gamesData);

module.exports = seedGames;