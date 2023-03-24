const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BudgetItem = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: Schema.User._id, required: true }
  },
  { timestamps: true },
)

module.exports = mongoose.model('BudgetItem', BudgetItem)