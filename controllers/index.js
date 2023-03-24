const User = require('../models/user');
const BudgetItem = require('../models/budget_item');
const Comment = require('../models/comment');
const HobbyItem = require('../models/hobby_item');
const Post = require('../models/post');
const TodoItem = require('../models/todo_item');


const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send('User with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const createToDo = async (req, res) => {
  try {
    const todo = await new TodoItem(req.body)
    await todo.save()
    return res.status(201).json({
      todo,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getTodoByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoItem.find({
      "userId": id
    })
    if (todo) {
      return res.status(200).json({ todo });
    }
    return res.status(404).send('Todo with the specified user ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateTodo = async (req, res) => {
  try {
    const todo = await TodoItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(todo)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TodoItem.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("TodoItem deleted");
    }
    throw new Error("TodoItem not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createToDo,
  getTodoByUserId,
  updateTodo,
  deleteTodo
}