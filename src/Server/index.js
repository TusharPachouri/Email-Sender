const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next()
    })

// POST endpoint for sending emails
app.post('/send-email', async (req, res) => {
  const { recipient, content } = req.body;

  // Create a transporter for sending the email
  const transporter = nodemailer.createTransport({
    service : 'gmail',
    host:'smtp.gmail.com',    
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    },
  });

  // Define the email options
  const mailOptions = {
    from:{
        name : 'Anmol Jain',
        address : process.env.USER
      },
    to: recipient,
    subject: 'Hello from Node.js',
    html: content,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
