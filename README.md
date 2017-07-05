# Jarois PC Repair Website
## (Basic implementation of express and nodemailer with gmail STMP)
#### Basic hypotethical PC Repair website backed with NodeJS for testing purposes of express framework.
---

To install just run...

```bash
  $ yarn install
  ```
  
#### To start...
```bash
  $ npm start
  ```

To make the contact form works and send emails troughout gmail, you must to enter your gmail
info credentials in the following object...

```javascript
	// Sender credentials with gmail
	let transporterOpt = {
		service: 'Gmail',
		auth: {
			user: 'yourgmailuser@gmail.com',
			pass: 'you5up3rP4ss'
		}
	}
```

_Done!_


---

# Jarois PC Repair Website
## (Implementación basica de express y nodemailer usando el SMTP de gmail
#### Sitio web basico hipotetico de un local para reparación de computadoras fundado en NodeJS para pruebas con el framework express
---

Para instalar se debe correr...

```bash
  $ yarn install
  ```
  
#### Para iniciar...
```bash
  $ npm start
  ```

Para que el formulario de contacto funcione y envie los emails usando gmail, 
debes ingresar tus credenciales en el siguiente objeto...

```javascript
	// Sender credentials with gmail
	let transporterOpt = {
		service: 'Gmail',
		auth: {
			user: 'yourgmailuser@gmail.com',
			pass: 'you5up3rP4ss'
		}
	}
```

_Listo!_
