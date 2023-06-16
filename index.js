//test variant

// const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("db_university", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const Student = sequelize.define(
//   "Student",
//   {
//     // Model attributes are defined here
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name_and_surname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     birthday: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     course: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     year_of_admission: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     specialty_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "students",
//     timestamps: false,
//   }
// );

// // `sequelize.define` also returns the model
// console.log(Student === sequelize.models.Student); // true

// (async () => {
//   try {
//     await Student.sync({
//       alter: true,
//       force: false,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "db_university",
// });

// simple query
// connection.query("SELECT * FROM students WHERE id=1;", (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log(result);

//   process.exit(0);
// });

// with placeholder
// connection.query(
//     'SELECT * FROM `teachers` WHERE `name_and_surname` LIKE ?',
//     ['%Ива%'],
//     function(err, results) {
//       console.log(results);
//     }
//   );

// var specialty = { name: "test"}
// var query  = connection.query ('INSERT INTO `specialty` SET ?', specialty, function(error, results) {
//     if (error) {
//         throw error
//     }
// } )
