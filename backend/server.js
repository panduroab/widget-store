require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');
const database = require('./database.js')();
database.connect();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router());

/**
 * 404 handler
 */
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  res.status(err.status || 400);
  res.json({
    message: err.message,
    code: err.status
  });
});

const listen = app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`App running at: http://${process.env.SERVER_HOST}:${listen.address().port}`);
});

module.exports = () => app;