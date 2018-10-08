// tp-shell.js

const tp = {
	print: function(...args) {
		document.getElementById('output').appendChild(document.createTextNode(JSON.stringify(args, null, '  ') + '\n'));
	},

	clear: function() {
		$('#output').empty();
	}
}
