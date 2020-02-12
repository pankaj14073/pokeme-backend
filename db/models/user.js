var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: Date,
    updated_at: Date
  });
  
  // the schema is useless so far
  // we need to create a model using it
  var User = mongoose.model('User', userSchema);
  
  // make this available to our users in our Node applications
  module.exports = User;