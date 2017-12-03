//--- SCHEMA SETUP -----
let mongoose = require('mongoose');
let postType = ['PROP', 'IMP'];
let propositionSchema = new mongoose.Schema({
  title: String,
  type: {type: String, enum: postType},
  image: String,
  author: String,
  description: String,
});

module.exports = mongoose.model("Proposition", propositionSchema);