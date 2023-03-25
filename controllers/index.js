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
const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id)
    if (post) {
      return res.status(200).json({ post });
    }
    return res.status(404).send('Post with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(post)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Post deleted");
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getCommentByPostId = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.find({
      "postId": id
    })
    if (comment) {
      return res.status(200).json({ comment });
    }
    return res.status(404).send('Comment with the specified user ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(comment)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Comment deleted");
    }
    throw new Error("Comment not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const createHobby = async (req, res) => {
  try {
    const hobby = await new HobbyItem(req.body)
    await hobby.save()
    return res.status(201).json({
      hobby,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getHobbyByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await HobbyItem.find({
      "userId": id
    })
    if (hobby) {
      return res.status(200).json({ hobby });
    }
    return res.status(404).send('Hobby with the specified user ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateHobby = async (req, res) => {
  try {
    const hobby = await HobbyItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(hobby)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deleteHobby = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HobbyItem.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("HobbyItem deleted");
    }
    throw new Error("HobbyItem not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const createBudget = async (req, res) => {
  try {
    const budget = await new BudgetItem(req.body)
    await budget.save()
    return res.status(201).json({
      budget,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getBudgetByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const hobby = await HobbyItem.find({
      "userId": id
    })
    if (hobby) {
      return res.status(200).json({ hobby });
    }
    return res.status(404).send('Hobby with the specified user ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateBudget = async (req, res) => {
  try {
    const hobby = await HobbyItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(hobby)
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await HobbyItem.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("HobbyItem deleted");
    }
    throw new Error("HobbyItem not found");
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
  deleteTodo,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  createComment,
  getCommentByPostId,
  updateComment,
  deleteComment,
  createHobby,
  getHobbyByUserId,
  updateHobby,
  deleteHobby,
  createBudget
}