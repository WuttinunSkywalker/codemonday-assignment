const express = require('express');
const teacherRouter = require('./routes/teacherRoutes');
const courseRouter = require('./routes/courseRoutes');

const app = express();

app.use(express.json());

// ROUTES
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/courses', courseRouter);

app.use((req, res) => {
  res.status(404).send('404: Endpoint not found');
});

module.exports = app;
