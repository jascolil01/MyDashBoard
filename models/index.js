const mongoose = require('mongoose')
const budgetItemSchema = require('./budget_item')
const commentSchema = require('./comment')
const hobbyItemSchema = require('./hobby_item')
const hobbySchema = require('./hobby')
const postSchema = require('./post')
const todoItemSchema = require('./todo_item')
const userSchema = require('./user')

const BudgetItem = mongoose.model('budgetItem', budgetItemSchema)
const Comment = mongoose.model('comment', commentSchema)
const HobbyItem = mongoose.model('hobbyItem', hobbyItemSchema)
const Hobby = mongoose.model('hobby', hobbySchema)
const Post = mongoose.model('post', postSchema)
const TodoItem = mongoose.model('todoItem', todoItemSchema)
const User = mongoose.model('user', userSchema)

module.exports = {
  BudgetItem,
  Comment,
  Hobby,
  HobbyItem,
  Post,
  TodoItem,
  User
}