const dotenv = require('dotenv');
dotenv.config({ path: '' });

const { Sequelize } = require('sequelize');

// SET CONNECTION DATABASE
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASS,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// MAP DATABASE MODEL
db.teachers = require('./assignment/Teacher')(sequelize, Sequelize);
db.courses = require('./assignment/Course')(sequelize, Sequelize);

// DEFINE DATABASE RELATION
db.teachers.hasMany(db.courses, { foreignKey: 'teacher_id' });
db.courses.belongsTo(db.teachers, { foreignKey: 'teacher_id' });

module.exports = db;
