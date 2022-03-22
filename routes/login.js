const express=require('express');
const router=express.Router();

router.get('/:username/:password',function(request,response){
    console.log(request.body);
    let username=request.params.username;
    let password=request.params.password;
    if(username===process.env.authUser && password===process.env.authPass){
        response.send(true);
    }
    else{
        response.send(false);
    }
});

module.exports=router;