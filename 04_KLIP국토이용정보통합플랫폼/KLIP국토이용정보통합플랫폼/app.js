var express = require('express');
// var ejs = require('ejs');
var app = express();

//engine 이거 ejs를 쓸필요가없는데.. ㅡ,.ㅡ;

app.set('views', `${__dirname}/dist`);
// app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/dist'));

// app.use( (req,res,next) => {
// });

app.get('*', function(req, res){
  // res.send('nopage', 404);
  res.status(404).send('<h1> Page not found </h1>');
});

app.use('/', (req, res) => {
  res.render('index', {});
});

app.use('plan_manage/proposal02', (req, res) => {
  console.log('a');
})

var server = app.listen(8005, () => {
  console.log(`http://127.0.0.1:${server.address().port}`);
});