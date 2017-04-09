var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000

app.get('/',function(req,res){
  res.send('hello')
});

app.get('/message/:message',function(req,res){
  res.send(req.params.message)
});

app.get('/params',function(req,res) {
  res.send(req.query.message)
});

app.listen(PORT,function(){
  console.log('server running')
});
