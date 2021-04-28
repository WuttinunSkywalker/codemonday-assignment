module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define('teacher', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A teacher must have first name',
        },
      },
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A teacher must have last name',
        },
      },
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A teacher must have date of birth ',
        },
      },
    },
  });

  return Teacher;
};
