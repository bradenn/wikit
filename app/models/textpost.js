var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var TextSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    unique: false,
    required: true,
    trim: true
  },
  comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }],
  user: {
    type: String,
    required: true,
  },
  realm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Realm'
    },
  nsfw: Boolean,
  date: {
    type: String,
    required: true,
  }
});
TextSchema.index({ text: "text" }, { background: true });
var CommentSchema = new mongoose.Schema({
  author: String,
  body: String,
  date: String
});

var Text = mongoose.model('Text', TextSchema);
var Comment = mongoose.model('Comment', CommentSchema);
module.exports = { Text: Text, Comment: Comment };
