const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const book = require('../models/books');

const dbString = "mongodb://localhost:27017/BookShop";
mongoose.Promise = global.Promise;

mongoose.connect(dbString, function(err){
    if(err){
        console.log("Error Connecting database: " + err );
    }
});

router.get('/', (req,res)=>{
    res.send("Api Works");
});

//fetching stuffs
router.get('/books', (req,res)=>{
    console.log("Fetching All Books From Database...");
    book.find({})
        .exec(function(err, books){
            if(err){
                console.log("Error Fetching Books: " + err);
            }else{
                    res.json(books);
            }
        });
});
//fetch book by Id
router.get('/book/id/:id', (req,res)=>{
    const _id= req.params.id;
    console.log('Fetching A Book Of ID: '+ _id);
    book.findOne({"_id":_id})
        .exec((err, book)=>{
            if(err){
                console.log('Unable to fetch book of ID:'+_id +" Error: "+ err);
            }else{
                res.json(book);
            }
        });
});
//insert new book
router.post('/book/add', function(req,res){
    console.log("Adding New Book ..")
    const body = req.body;
    const newBook = new book({
       name: body.name,
       author: body.author,
       description: body.description,
       category: body.category,
       price : body.price,
       stock : body.stock
    });
    newBook.save((err, addedBook)=>{
        if(err){
            console.log("Error adding new book: "+err);
        }else{
            res.json({message: "Book added!", "Id": addedBook._id});
        }
    });
});

//updating old books

router.put('/book/update/id/:id', (req,res)=>{
    const _id = req.params.id;
    console.log("Updating Book Of Id: "+_id+ "..." );
    const body = req.body;
    const bookupdate = {
        name: body.name,
        author: body.author,
        description: body.description,
        category: body.category,
        price: body.price,
        stock: body.stock
    };
    book.findByIdAndUpdate(_id, bookupdate, (err, updatedBook)=>{
        if(err){
                console.log("Error updating book:  "+ err);
        }else{
            res.json({message: "Book updated!", "Id": _id});
        }
    });

});

//delete a book

router.delete('/book/remove/id/:id', function(req,res){
    const _id = req.params.id;
    console.log("Deleting book of id "+_id +" ...");
    book.findByIdAndRemove(_id, (err, removedBook)=>{
        if(err){
                console.log("Error removing book: "+err);
        }else{
                res.json({message: "Book removed!", "Id": _id});
        }
    });

});




module.exports = router;