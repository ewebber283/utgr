const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Games extends Model {
    static upvote(body, models) {
        return models.Vote.create({
          user_id: body.user_id,
          games_id: body.game_id
        }).then(() => {
          return Games.findOne({
            where: {
              id: body.games_id
            },
            attributes: [
                'id',
                'name',
                'user_id',
                [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE games.id = vote.games_id)'), 'vote_count']
            ]
          });
        });
      }
    }

// create fields/columns for Post model
Games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // We talked about limiting the number of preselected...will need to work in to code
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'games'
    }
  );

  module.exports = Games;