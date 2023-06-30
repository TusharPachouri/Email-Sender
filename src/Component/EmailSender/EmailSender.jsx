import React, { useState } from 'react';
import './EmailSender.css'
import axios from 'axios';

function EmailSender() {
  const [recipient, setRecipient] = useState('');
  const [content, setContent] = useState('');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSendEmail = async () => {
    try {
      // Make a POST request to your backend endpoint with recipient and content data
      const response = await axios.post('http://localhost:3000/send-email', {
        recipient,
        content,
      });

      if (response.status === 200) {
        // Email sent successfully
        alert('Email sent!');
        setRecipient('');
        setContent('');
      } else {
        // Email sending failed
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('An error occurred while sending the email.');
    }
  };


  return (
    <div className="container">
    <h2>Email Sender</h2>
    <form>
      <label htmlFor="recipient">Recipient:</label>
      <input
        type="text"
        id="recipient"
        value={recipient}
        onChange={handleRecipientChange}
      />
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={handleContentChange}
      />
      <button onClick={handleSendEmail}>Send Email</button>
    </form>
  </div>
  );
}

export default EmailSender;
