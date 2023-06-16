const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Teacher = sequelize.define('Teacher', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name_and_surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      academic_degree_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
  }, {
    // Other model options go here
    tableName: 'teachers',
    timestamps: false
  });
  
  module.exports = Teacher;