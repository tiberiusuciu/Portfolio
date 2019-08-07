const express = require('express')
const nodemailer = require("nodemailer")
const cors = require('cors')

const storedCredentials = require('../Untracked/credentials');

var bodyParser = require('body-parser')

const app = express()


app.use(cors({credentials: true, origin: true}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

app.post('/contact', (req, res) => {
    var userform = req.body;

    const output = `
        <h2>Name:</h2>
        <p>${userform.name}</p>
        <h2>Email:</h2>
        <p>${userform.email}</p>
        <h2>Description:</h2>
        <p>${userform.description}</p>
    `;
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: storedCredentials.emailCredentials.email, // generated ethereal user
            pass: storedCredentials.emailCredentials.password  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Portfolio" <tiberius.portfolio.bot@gmail.com>', // sender address
        to: 'tiberiu.cristian.suciu@gmail.com', // list of receivers
        subject: 'New contact submit', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        res.send();
    });

});

app.listen(port, () => console.log(`App listening on port ${port}!`))