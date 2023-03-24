const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HobbyItem = new Schema(
  {
    name: { type: String, required: true },
    hobbyId: { type: Schema.Hobby._id, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('HobbyItem', HobbyItem)