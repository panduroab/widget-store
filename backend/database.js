const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const conn = mongoose.connection;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;

const connect = () => {
  const url = `mongodb://${username}:${password}@${host}:${port}/${database}`;
  mongoose.connect(
    url,
    {
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500, // Reconnect every 500ms
      bufferMaxEntries: 0,
      useNewUrlParser: true
    }
  );
};

conn.on("error", err => {
  console.log("Database error: ", err);
});

conn.on("connected", () => {
  console.log("Connected to database");
});

conn.on('disconnected', () => {
  console.error(`Reconnecting in 5000ms`);
  setTimeout(connect, 5000);
 });

module.exports = () => ({
  connect: connect
});