const express = require('express');
const db = require('./config/connection'); // import the database connection
const routes = require('./routes'); // import the routes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Start the server after the database connection is established
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});