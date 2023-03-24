const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hobby = new Schema(
  {

  },
  { timestamps: true },
)

module.exports = mongoose.model('Hobby', Hobby)