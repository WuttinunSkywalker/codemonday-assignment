const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './.env' });

// SYNC DATABASE
const db = require('./models/database');
(async () => {
  let retries = 5;
  const interval = 1000;
  while (retries) {
    try {
      await db.sequelize.sync();
      break;
    } catch (err) {
      console.log(err);
      retries--;
      if (retries === 0) throw err;
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
})();

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
