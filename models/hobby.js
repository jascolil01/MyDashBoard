const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hobby = new Schema(
  {
    name: { type: Schema.User.name, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: Schema.User._id, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('Hobby', Hobby)