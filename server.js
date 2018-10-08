const path = require('path');
const express = require('express');
const app = express();

console.log('--------------------');
console.log('Anime Library Server');
console.log('--------------------');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/add/:a([-.0-9]+)/:b([-.0-9]+)', function(req, res) {
	res.send({result: parseFloat(req.params.a) + parseFloat(req.params.b)});
});
app.get('/sub/:a([-.0-9]+)/:b([-.0-9]+)', function(req, res) {
	res.send({result: parseFloat(req.params.a) - parseFloat(req.params.b)});
});
app.get('/mul/:a([-.0-9]+)/:b([-.0-9]+)', function(req, res) {
	res.send({result: parseFloat(req.params.a) * parseFloat(req.params.b)});
});
app.get('/div/:a([-.0-9]+)/:b([-.0-9]+)', function(req, res) {
	res.send({result: parseFloat(req.params.a) / parseFloat(req.params.b)});
});
app.get('/sqrt/:a([-.0-9]+)/:b([-.0-9]+)', function(req, res) {
	res.send({result: Math.sqrt(parseFloat(req.params.a))});
});
app.get('/sqrt/:a([-.0-9]+)', function(req, res) {
	res.send({result: Math.sqrt(parseFloat(req.params.a))});
});




app.listen(7777, function () {
   console.log('server listening. port:', 7777, '. env:', app.get('env'));
});
