const mongoose = require('mongoose')
const user = process.env.MONGO_USERNAME
const pass = process.env.MONGO_PASSWORD
const host = process.env.MONGO_HOST
const dbName = process.env.MONGO_DATABASE

const db = mongoose.connect(
  `mongodb://${user}:${pass}@${host}/${dbName}`
)

module.exports = db
