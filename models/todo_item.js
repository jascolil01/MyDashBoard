const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoItem = new Schema(
  {

  },
  { timestamps: true },
)

module.exports = mongoose.model('TodoItem', TodoItem)