'use strict';

const express =  require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	nodemailer = require('nodemailer');

const port = 3001;


var app = express();

// initial setup for body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Directory for static assets
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Hello friend :]'
	})
	console.log('Hello friend :]')
})

app.listen(port)
console.log(`Server running on port ${port}...`)