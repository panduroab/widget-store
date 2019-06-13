const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const conn = mongoose.connection;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

conn.on("error", err => {
  console.log("Database error: ", err);
});
conn.on("connected", () => {
  console.log("Connected to database");
});

const connectToDatabase = () => {
  const url = `mongodb://${username}:${password}@${host}:${port}/${database}`;
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  );
};

module.exports = () => ({
  connect: connectToDatabase
});