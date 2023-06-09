const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
const middleware = require('../middleware')

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
router.delete('/posts/delete_post/:id', controllers.deletePost)

router.post('/comment', controllers.createComment)
router.get('/comment/by_postId/:id', controllers.getCommentByPostId)
router.put('/comment/update_comment/:id', controllers.updateComment)
router.delete('/comment/delete_comment/:id', controllers.deleteComment)

router.post('/hobby', controllers.createHobby)
router.get('/hobby/by_userId/:id', controllers.getHobbyByUserId)
router.put('/hobby/update_hobby/:id', controllers.updateHobby)
router.delete('/hobby/delete_hobby/:id', controllers.deleteHobby)

router.post('/budget', controllers.createBudget)
router.get('/budget/by_userId/:id', controllers.getBudgetByUserId)
router.put('/budget/update_budget/:id', controllers.updateBudget)
router.delete('/budget/delete_budget/:id', controllers.deleteBudget)

router.post('/item', controllers.createHobbyItem)
router.get('/item/by_hobbyId/:id', controllers.getHobbyItemByHobbyId)
router.put('/item/update_item/:id', controllers.updateHobbyItem)
router.delete('/item/delete_item/:id', controllers.deleteHobbyItem)

router.post('/auth/register', controllers.Register)
router.post('/auth/login', controllers.Login)
router.get(
  '/auth/session',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.CheckSession
)


module.exports = router;