const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThingsForHobby = new Schema(
  {
    content: { type: String, required: true },
    hobbyId: { type: String, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('ThingsForHobby', ThingsForHobby)