const { MongoClient } = require('mongodb');
const { database } = require('../config')


// Connection URL
const url = database;
const client = new MongoClient(url);
client.connect().then(()=>console.log('connect'))

// const dbName = 'books-app';
// const db = client.db(dbName);
// const collection = db.collection('books');


// module.exports = collection
module.exports = client