const { response } = require('express');
const express=require('express');
const book=require('../models/book_model');

const router=express.Router();


router.get('/:id?',function(request,response){
    if(request.params.id){
        let id=request.params.id-1;
        let data=book.getOneBook(id);
        console.log(data);
        response.json(data);
    }
    else {
        let data=book.getAllBooks();
        response.json(data);
    }

});

router.post('/',function(request,response){
    let sqldemo="insert into bookTable values(";
    sqldemo+=request.body.id_book+","+request.body.name+","+request.body.author+");"
    response.json(sqldemo);
});

router.put('/:id',function(request,response){
    let id_book=request.params.id;
    let name=request.body.name;
    let author=request.body.author;
    let sqldemo="update bookTable set name="+name+", author="+author+" WHERE id_book="+id_book;
    response.json(sqldemo);
});

router.delete('/:id',function(request, response){
    let id_book=request.params.id;
    let sqldemo="DELETE FROM bookTable WHERE id_book="+id_book;
    //response.json(sqldemo);
    response.send(sqldemo);
});

module.exports = router;