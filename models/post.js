const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('Post', Post)