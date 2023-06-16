const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Specialty= sequelize.define('Specialty', {
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
    tableName: 'specialty',
    timestamps: false
  });
  
  module.exports = Specialty;