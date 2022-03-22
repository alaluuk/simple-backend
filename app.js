const express = require('express')
const dotenv=require('dotenv')
const cors=require('cors');
const bookRouter=require('./routes/book.js')
const exampleRouter=require('./routes/example')
const basicAuth = require('express-basic-auth');

const app = express();
app.use(cors());
dotenv.config();
app.use(express.urlencoded({extended:false}));

app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ));
app.use('/book',bookRouter);
app.use('/example',exampleRouter);

function myAuthorizer(username, password, cb){
  if(username===process.env.authUser && password ===process.env.authPass){
      return cb(null, true);
  }
  else{
      return cb(null, false);
  }
}

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