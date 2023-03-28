const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

const User = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    salary: { type: Number, required: true },
  },
  { timestamps: true },
)

User.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id })
}

module.exports = mongoose.model('User', User)