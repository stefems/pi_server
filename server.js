const express = require('express')
const http = require('http')
const app = express()
const cmd = require('node-cmd')

app.get('/', (req, res) => {
	cmd.run('chrome-cli open "https://youtube.com"');
	console.log("Opening!");
	res.send('Hello World!');
});

app.get('/search/:search_term', (req, res) => {
	cmd.run("chrome-cli open 'http://" + req.params.search_term.replace(/ /g, '') + ".com'");
	res.send('Hello World!');
});

app.set('port', 8080);
app.set('host', '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});