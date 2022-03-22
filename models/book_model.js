const bookTable=[
    {"id_book":1, "name":'Python',"author":'Artem'},
    {"id_book":2, "name":'JavaScript',"author":'Pekka'},
    {"id_book":3, "name":'SQL',"author":'Hovi'}
];

const book={
    getAllBooks:function(){
        return bookTable;
    }
}

module.exports=book;