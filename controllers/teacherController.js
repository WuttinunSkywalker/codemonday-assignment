const db = require('./../models/database');

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await db.teachers.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        teachers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTeacher = async (req, res) => {
  try {
    const { first_name, last_name, date_of_birth } = req.body;

    const newTeacher = await db.teachers.create({
      first_name,
      last_name,
      date_of_birth,
    });

    res.status(201).json({
      status: 'success',
      data: {
        teacher: newTeacher,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
