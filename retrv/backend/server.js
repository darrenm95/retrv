const { PORT } = require('./config');

// import app
const app = require('./app');

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
