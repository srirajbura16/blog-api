#! /usr/bin/env node

console.log(
  'This script populates some test users and posts to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true'
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async');

var Post = require('./models/post');
var User = require('./models/user');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = [];
var posts = [];

//user create
function userCreate(username, password, cb) {
  let userdetails = { username: username, password: password };

  const user = new User(userdetails);

  user.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New User: ' + user);
    users.push(user);
    cb(null, user);
  });
}
//post create
function postCreate(title, content, author, cb) {
  let postdetails = { title: title, content: content, author: author };

  const post = new Post(postdetails);

  post.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New User: ' + post);
    posts.push(post);
    cb(null, post);
  });
}

//create users

function createUsers(cb) {
  async.series(
    [
      function (callback) {
        userCreate('Patrick', 'Rothfuss', callback);
      },
      function (callback) {
        userCreate('Ben', 'Bova', callback);
      },
      function (callback) {
        userCreate('Isaac', 'Asimov', callback);
      },
      function (callback) {
        userCreate('Bob', 'Billings', callback);
      },
      function (callback) {
        userCreate('Jim', 'Jones', callback);
      },
    ],
    // optional callback
    cb
  );
}
//create posts
function createPosts(cb) {
  async.parallel(
    [
      function (callback) {
        postCreate('title 0', 'content 0', users[0], callback);
      },
      function (callback) {
        postCreate('title 1', 'content 1', users[1], callback);
      },
      function (callback) {
        postCreate('title 2', 'content 2', users[2], callback);
      },
      function (callback) {
        postCreate('title 3', 'content 3', users[3], callback);
      },
      function (callback) {
        postCreate('title 4', 'content 4', users[4], callback);
      },
    ],
    // optional callback
    cb
  );
}
//

async.series(
  [createUsers, createPosts],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    } else {
      console.log('USERS: ' + users);
      console.log('POSTS: ' + posts);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
