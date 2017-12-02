//--- SCHEMA SETUP -----
let mongoose = require('mongoose');
let propositionSchema = new mongoose.Schema({
  title: String,
  image: String,
  author: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Proposition", propositionSchema);