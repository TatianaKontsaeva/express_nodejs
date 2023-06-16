const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Discipline = sequelize.define('Discipline', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
  }, {
    // Other model options go here
    tableName: 'disciplines',
    timestamps: false
  });
  
  module.exports = Discipline;