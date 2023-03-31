const db = require('../db')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'Connection to MongoDB failed:'))

const main = async () => {
  const post = [
    { name: 'Mel Dora Gronchi', content: 'I cannot believe that I got all my tasks done today', userId: 1447 },
    { name: 'Raphael Óðinn Dircks', content: 'Still need to mow my lawn today', userId: 1447 },
    { name: 'Philon Magdalini Potenza', content: 'Somedays I like to relax', userId: 1447 },
    { name: 'Hákun Drag Strip Shvets', content: 'What is on your todo list?', userId: 1447 },
    { name: 'Kleopatros Kayleah Thomassen', content: 'Just started a new hobby today!', userId: 1447 },
    { name: 'Gudina Anaxagoras Schneiders', content: 'Writing always calms me down', userId: 1447 },
    { name: 'Maria Grazia Āwhina Yasuda', content: 'Do bears really beat Battlestar Galactica?', userId: 1447 },
    { name: 'Sequoyah Jordaan Alberda', content: 'I just want people to ask me questions that I havent asked my self, is that too much to ask?', userId: 1447 },
    { name: 'Romulus Asterios Kozioł', content: 'Are we alone in this universe?', userId: 1447 },
    { name: 'Donata Adil Weasley', content: 'Whats your favorite TV show?', userId: 1447 },
    { name: 'Chanda Kodey Southgate', content: 'Plants calm me down', userId: 1447 },
    { name: 'Bjørn Lukas Parker', content: 'Letting go of our attachments is a difficult struggle for all of us', userId: 1447 },
    { name: 'Nils Pharaildis Leroux', content: 'I am gonna make him an offer he cannot refuse', userId: 1447 },
    { name: 'Pramod Daphné Grigorescu', content: 'I like pizza', userId: 1447 },
    { name: 'Niek Cassandra Ojeda', content: "Toto, I've a feeling we're not in Kansas anymore", userId: 1447 },
    { name: 'Elvira Aridai Jónás', content: 'Elementary, my dear Watson', userId: 1447 },
    { name: 'Awstin Jevgēņija Norris', content: 'Sometimes I wonder if I am in a simulation or not', userId: 1447 },
    { name: 'Eliana Slavica Wyatt', content: 'HammerHead sharks are the coolest shark', userId: 1447 },
    { name: 'Luigi Verbena Hardy', content: 'NO I AM NOT REALTED TO MARIO', userId: 1447 },
    { name: 'Jamshid Željko Dwerryhouse', content: 'I can borrow a french fry?', userId: 1447 },
  ]
  await Post.insertMany(post)
  console.log("Posts added")
}
const run = async () => {
  await main()
  db.close()
}

run()