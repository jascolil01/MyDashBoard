const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', User)