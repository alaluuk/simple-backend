const express=require('express');

const router=express.Router();

router.get('/',function(request,response){
    console.log("koe");
});
module.exports = router;