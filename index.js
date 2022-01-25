// Dependencies
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3000);

// Redirect
app.get('/', (req, res) => {
	res.redirect('/flowfactory');
});

// Controllers
const Asana = require('./controllers/asanaController');
app.use('/asana', Asana);

const Sequence = require('./controllers/sequenceController');
app.use('/sequence', Sequence);

app.listen(app.get('port'), () => {
	console.log(
		'Hello world! Flow Factory API listening on port ' + app.get('port')
	);
});

module.exports = app;
