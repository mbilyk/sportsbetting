const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'betdb',
                                process.env.DB_USER || 'mbilyk',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });
const Team = sequelize.define('Team', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
  }
});

const Bet = sequelize.define('Bet', {
  amount: {
      type: Sequelize.INTEGER,
      allowNull: false
  }
});

Bet.belongsTo(Team);

module.exports = {
    sequelize: sequelize,
    Team: Team,
    Bet: Bet
};