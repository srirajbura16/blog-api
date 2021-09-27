const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    published: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

//Post URL
UserSchema.virtual('url').get(function () {
  return '/users/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);
