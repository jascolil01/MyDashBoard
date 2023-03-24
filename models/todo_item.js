const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoItem = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.User._id, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('TodoItem', TodoItem)