const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    salary: { type: Number, required: true },
    budget_list: { type: Array, required: false },
    todo_list: { type: Array, required: false },
    hobby_list: { type: Array, required: false }
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', User)