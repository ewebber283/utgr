const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Julian',
        email: 'julian@yahoo.com',
        password: 'password123'
    },
    {
        username: 'Hunter',
        email: 'hunter@yahoo.com',
        password: 'password123'
    },
    {
        username: 'Fernando',
        email: 'fernando@yahoo.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
