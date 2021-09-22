const express = require('express');
const app = express();
const port = 3000;

//Mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.DB_HOST;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Middleware
app.use(express.json());
app.use(express.urlencoded());

//Router
app.use('/api', require('./routes/api'));

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
