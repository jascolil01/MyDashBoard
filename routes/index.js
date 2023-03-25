const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/update_user/:id', controllers.updateUser)
router.delete('/users/delete_user/:id', controllers.deleteUser)

router.post('/todo', controllers.createToDo)
router.get('/todo/by_userId/:id', controllers.getTodoByUserId)
router.put('/todo/update_todo/:id', controllers.updateTodo)
router.delete('/todo/delete_todo/:id', controllers.deleteTodo)

router.post('/posts', controllers.createPost)
router.get('/posts', controllers.getAllPosts)
router.get('/posts/by_id/:id', controllers.getPostById)
router.put('/posts/update_post/:id', controllers.updatePost)

module.exports = router;