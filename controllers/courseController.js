const db = require('./../models/database');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await db.courses.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        courses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { course_name, course_description, teacher_id } = req.body;

    const newCourse = await db.courses.create({
      course_name,
      course_description,
      teacher_id,
    });

    res.status(201).json({
      status: 'success',
      data: {
        course: newCourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
