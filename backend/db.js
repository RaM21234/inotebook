const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inote_DB"
const uri='mongodb+srv://Ram_21234:YvJSQ6ZcHmapTt7i@cluster0.uxidpqe.mongodb.net/inote_DB'

const connectToMongo = () => {
  mongoose.connect(uri)
    .then(() => {
      console.log('connected to Mongo successfully');
    })
    .catch((error) => {
      console.error('Error connecting to Mongo:', error);
    });
};

//module.exports = { connectToMongo };
module.exports = connectToMongo;