const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api',(req,res)=>{
    res.json({
        message:"welcom"
    });
});
app.post('/api/post',verifyToken,(req,res)=>{

    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.send(403);
        }else{
            res.json({
                message:"post created....",
                authData,
            })
        }
    })
});
app.post('/api/login',(req,res)=>{
  const user ={
      id:1,
      username:'bread',
      email:'yash1@gmail.com'
  }
  jwt.sign({user:user},'secretkey',(err,token)=>{
res.json({
    token,
})
  });
});

function verifyToken(req,res,next){
const bearerHeader=req.headers['Authorization'];
if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(' ');
const bearerToken = bearer[1];
req.token = bearerToken;
next();
}else{
    res.sendStatus(403);
}
}


app.listen(5000,()=>console.log('serverstarte on : 5000'));