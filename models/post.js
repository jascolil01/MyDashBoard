const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    name: { type: Schema.User.name, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.User._id, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('Post', Post)