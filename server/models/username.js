const { Schema, model } = require('mongoose');

const usernameSchema = new Schema({
    username: {
      type: String
    },
  });
  
  const Username = model('Username', usernameSchema);
  
  module.exports = Username;
  