module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define('course', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'A course must have course name',
        },
      },
    },
    course_description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A course must have description',
        },
      },
    },
    teacher_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A course must teacher id',
        },
      },
    },
  });

  return Course;
};
