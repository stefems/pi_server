const express = require('express')
const http = require('http')
const app = express()
const cmd = require('node-cmd')
const { chromix } = require("chromix-too")();

app.get('/', (req, res) => {
	cmd.run('chromium-browser "https://youtube.com"');
	console.log("Opening!");
	res.send('Hello World!');
});

app.get('/load/:website', (req, res) => {
	//chromix("open",{},"https://github.com/smblott-github/chromix");
	cmd.run("chromium-browser 'http://" + req.params.website.replace(/ /g, '') + ".com'");
	res.send('Loading: ' + req.params.website.replace(/ /g, '') + '.com');
});

app.get('/search/:search_term', (req, res) => {
	console.log('https://www.google.com/search?query=' + req.params.search_term.replace(/ /g, '%20'));
	cmd.run("chromium-browser 'https://www.google.com/search?query=" + req.params.search_term.replace(/ /g, '%20')
+ "'");
	res.send("Searching: " + req.params.search_term);

});
//if we keep our own array of the urls and keep them in order we can close current, left right, etc.
app.get('/close', (req, res) => {
	chromix("rm", {}, );
	res.send("Closing the current tab.");
});

app.set('port', 8080);
app.set('host', '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
