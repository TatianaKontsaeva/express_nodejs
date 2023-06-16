const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_university", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;