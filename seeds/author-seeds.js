const { Author } = require('../models');

const authorData = [
    {
        author_name: 'Hector Rangel'
    },
    {
        author_name: 'Eric Webber'
    },
    {
        author_name: 'Zach Doe'
    },
    {
        author_name: 'Nathaniel Ayala'
    }
];

const seedAuthors = () => Author.bulkCreate(authorData);

module.exports = seedAuthors;