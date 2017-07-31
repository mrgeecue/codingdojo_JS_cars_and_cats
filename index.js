var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'./public/images')));

app.get('/cars', function(req, res){
  console.log(req.body);
  res.render('cars');
})

app.get('/cars/new', function(req, res){
  res.render('new');
})

app.get('/cats', function(req, res){
  res.render('cats');
})

//port listener
app.listen(7077, function(){
  console.log('Server started on local host 7077...');
})
