const client = require('./mongo')

const dbName = 'books-app';
const db = client.db(dbName);
const collection = db.collection('books');

module.exports = collection