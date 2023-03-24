const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {

  },
  { timestamps: true },
)

module.exports = mongoose.model('Comment', Comment)