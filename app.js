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

// Will use for views Pug templates
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Directory for static assets
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
	let tplOptions = {
		pgTitle: 'Jarois PC Repair',
		mainTitle: 'We fix Your Computer fast and LOW PRICE'
	}
	res.render('index', tplOptions)
})

app.listen(port)
console.log(`Server running on port ${port}...`)