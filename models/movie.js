
let Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    let movie = sequelize.define("movie", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        movie_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        movie_poster: {
            type: DataTypes.TEXT,
            allowNull: false
        },
      
         movie_year: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        }

    });

    return movie;
    
};


