// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');
const Author = require('./Author')

// create associations
Author.hasMany(Post, {
    foreignKey: 'author_id'
});

Post.belongsTo(Author, {
    foreignKey: 'author_id',
    onDelete: 'SET NULL'
});

Author.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',

    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsToMany(Author, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


// add routes for user posts
//post belongs to user
module.exports = { User, Post, Vote, Comment, Author };
