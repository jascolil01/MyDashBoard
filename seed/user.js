const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'Connection to MongoDB failed:'))

const main = async () => {
  const user = [
    { name: 'Test', username: 'Test1234', password: 'Test12345', salary: 100000, budget_list: [1, 2, 3, 4] }
  ]
  await User.insertMany(user)
  console.log("Users added")
}
const run = async () => {
  await main()
  db.close()
}

run()