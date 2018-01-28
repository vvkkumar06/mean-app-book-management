const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookSchema = new schema({
    name: String,
    author: String,
    description: String,
    category: String,
    price: Number,
    stock: Number
});

module.exports = mongoose.model('book', BookSchema, 'books');
