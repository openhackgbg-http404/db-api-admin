var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function(req, res){
    res.send('yay');
});

app.listen(8888, function() {
    console.log('start server');
});