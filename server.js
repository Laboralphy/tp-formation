const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

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

app.get('/list', function(req, res) {
	let aList = fs.readdirSync('./exercices/');
	aList = aList.filter(f => f.match(/\.js$/));
	res.send({list: aList});
});

app.get('/ex/:x([-_a-z0-9]+)', function(req, res) {
	res.sendFile(req.params.x + '.js', {root: './exercices'});
});

app.get('/index/:x([-_a-z0-9]+)', function(req, res) {
	let x = req.params.x;
	res.send(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>TP</title>
		<script src="/jquery.js"></script>
		<script src="/tp-shell.js"></script>
	</head>
	<body>
		<h1>formation</h1>
		<div>
		<button type="button" onclick="location.href='/'">[exercices]</button>
		</div>
		<h2>${x}</h2>
		<pre id="output"></pre>
		<script src="/ex/${x}"></script>
	</body>
</html>`);
});

app.get('/', function(req, res) {
	let x = req.params.x;
	let aList = fs.readdirSync('./exercices/');
	aList = aList.filter(f => f.match(/\.js$/)).map(f => f.replace(/\.js$/, ''));
	let sHTML = aList.map(f => '<button type="button" onclick="location.href=\'/index/' + f + '\'">' + f + '</button>').join('');
	res.send(`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>TP</title>
		<script src="/jquery.js"></script>
		<script src="/tp-shell.js"></script>
	</head>
	<body>
		<h1>formation</h1>
		<div>
			${sHTML}
		</div>
		<pre id="output"></pre>
	</body>
</html>`);
});


app.listen(7777, function () {
   console.log('server listening. port:', 7777, '. env:', app.get('env'));
});
