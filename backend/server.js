require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require("mongoose");
const router = require('./router');
/*mongoose.connect({
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME
});*/
const conn = mongoose.connection;
conn.on("error", err => {
  console.log("Database error: ", err);
});
conn.on("connected", () => {
  console.log("Connected to database");
});
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router());

const listen = app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log(`App running at: http://${process.env.SERVER_HOST}:${listen.address().port}`);
});

module.exports = () => app;