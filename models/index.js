// import models
const Comment = require('./Comment');
const Games = require('./Games');
const Post = require('./Post');
const User = require('./User');

// Products belongsTo Games
Comment.belongsTo(Games, {
    foreignKey: 'Games_id'
});
// Categories have many Products
Games.hasMany(Comment, {
    foreignKey: 'Games_id'
});

// Products belongToMany Tags (through User)
Comment.belongsToMany(Post, {
    through: User,
    as: 'tag_product',
    foreignKey: 'product_id'
});
// Tags belongToMany Products (through User)
Post.belongsToMany(Comment, {
    through: User,
    as: 'tag_product',
    foreignKey: 'tag_id'
});

module.exports = {
    Comment,
    Games,
    Post,
    User,
};