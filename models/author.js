const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}

Author.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'author'
        
    }
);

module.exports = Author;