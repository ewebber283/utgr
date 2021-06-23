const seedGames = require('./games-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGames();
  console.log('\n----- Games SEEDED -----\n');

  process.exit(0);
};

seedAll();