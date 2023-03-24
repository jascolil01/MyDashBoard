const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HobbyItem = new Schema(
  {

  },
  { timestamps: true },
)

module.exports = mongoose.model('HobbyItem', HobbyItem)