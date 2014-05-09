
var express = require('express'),
	app = express(),
	http = require('http'),
	experience = require('./routes/experience');

app.configure(function () {
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
});

var hello = function(req, res) {
	res.send('test');
} 

app.get('/experience', experience.findAll);
app.get('/experience/:id', experience.findById);
app.post('/experience', experience.addexperienceElement);
app.put('/experience/:id', experience.updateexperienceElement);
app.delete('/experience/:id', experience.deleteexperienceElement);



app.listen(4000);

	console.log("E listening on port 4000" );
