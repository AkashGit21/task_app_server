const mongoose = require('mongoose')
const { uri } = require('./constants')

const connectDB = async (url = uri) => {
  await mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  )
  .then(console.log(`Connected to DB!`))
  .catch(err => console.log(err))
}

module.exports = connectDB;