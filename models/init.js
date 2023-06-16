const sequelize = require('../database');

const Student = require('./student');
const Specialty = require('./specialty');
const Teacher = require('./teacher');
const Discipline = require('./discipline');


Student.hasMany(Specialty);
Specialty.belongsTo(Student);
Specialty.hasMany(Student);
Student.belongsTo(Specialty);



const init = async () => {
    // await sequelize.sync({alter: true});
    await Student.sync({alter: true});
    await Specialty.sync({alter: true});
    await Teacher.sync({alter: true});
    await Discipline.sync({alter: true});
}

module.exports = { init, Student, Specialty, Teacher, Discipline };