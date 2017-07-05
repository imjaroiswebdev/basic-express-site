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


// Index
app.get('/', (req, res) => {
	let tplOptions = {
		pgTitle: 'Jarois PC Repair',
		mainTitle: 'We fix Your Computer fast and at LOW PRICE'
	}
	res.render('index', tplOptions)
})

// Contact us
app.get('/contact', (req, res) => {
	let tplOptions = {
		pgTitle: 'Jarois PC Repair|We fix your PC today',
		mainTitle: 'Contact us and get your PC repair today'
	}
	res.render('contact', tplOptions)
})

// Send form
app.post('/contact/send', (req, res) => {
	// Sender credentials with gmail
	let transporterOpt = {
		service: 'Gmail',
		auth: {
			user: 'yourgmailuser@gmail.com',
			pass: 'you5up3rP4ss'
		}
	}

	const transporter = nodemailer.createTransport(transporterOpt)

	let senderName = req.body.sendername,
		senderEmail = req.body.senderemail,
		senderPhone = req.body.senderphone,
		senderMsg = req.body.senderMsg;

	const plainText = `We have a submition from a visitor.
		Here the details...
		From: ${senderName}.
		Email: ${senderEmail}.
		Phone: ${senderPhone}.
		PC issue: ${senderMsg}.`;

	const htmlVersion = `<h3>We have a submition from a visitor.</h3>
		<p>Here the details...</p>
		<ul>
			<li>From: ${senderName}.</li>
			<li>Email: ${senderEmail}.</li>
			<li>Phone: ${senderPhone}.</li>
			<li>PC issue: ${senderMsg}.</li>
		</ul>`;

	let mailContent = {
		from: 'Jarois PC Rapair visitor <do-not-answer@jaroispcrepair.com>',
		to: 'Expris1947@jourrapide.com',
		subject: 'Website submition',
		text: plainText,
		html: htmlVersion
	}

	transporter.sendMail(mailContent, (err, info) => {
		if(err) {
			console.log(err)
			res.redirect('/')
		} else {
			console.log(`Message successfully sent: ${info.response}`)
			res.redirect('/')	
		}
	})
})

app.listen(port)
console.log(`Server running on port ${port}...`)