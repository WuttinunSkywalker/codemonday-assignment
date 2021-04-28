const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './.env' });

// SYNC DATABASE
const db = require('./models/database');
db.sequelize.sync();

// TEST DATABASE CONNECTION
db.sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// START SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
