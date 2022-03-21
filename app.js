const express = require('express')
const dotenv=require('dotenv')
const bookRouter=require('./routes/book.js')


const app = express()
dotenv.config();

app.use('/book',bookRouter);

var port=process.env.PORT;


app.listen(port, 
  function(){
    console.log('App listening on port '+port)
  },
);

app.get('/',function(request,response){
    console.log("polkua /koe  ");
    response.send("Express REST API");
});