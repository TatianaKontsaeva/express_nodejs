const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Student= sequelize.define('Student', {
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
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      course: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year_of_admission: {
       type: DataTypes.INTEGER,
        allowNull: false,
      },
      specialty_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
  }, {
    // Other model options go here
    tableName: 'students',
    timestamps: false
  });
  
  module.exports = Student;