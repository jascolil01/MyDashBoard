const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoItem = new Schema(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('TodoItem', TodoItem)