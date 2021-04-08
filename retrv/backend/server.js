require('dotenv').config({ path: '.env '})
const { PORT } = require('./config');

// Import app
const app = require('./app');

// Import Mongoose
const mongoose = require('mongoose');

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Database Connection
mongoose.connect(process.env.DATABASE,
  {
      useUnifiedTopology: true,
      useNewUrlParser: true
  }
);

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Database Connection Error -> ${err.message}`);
});