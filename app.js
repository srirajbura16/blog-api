const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();

//Mongoose connection
require('./config/db');

//Passport
require('./config/passport');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
