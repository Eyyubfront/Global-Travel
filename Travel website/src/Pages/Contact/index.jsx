import React, { useState } from 'react';
import './contact.css';  
import emailjs from 'emailjs-com';  
import Footer from '../../Companents/Footer';
import { Link } from 'react-router-dom';  
import { FaHome } from 'react-icons/fa';  
import { Typography, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id') 
      .then((result) => {
        alert('Mesajınız göndərildi!');
      }, (error) => {
        alert('Mesaj göndərilərkən xəta baş verdi. Xahiş edirik sonra təkrar cəhd edin.');
      });
  };

  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className='top__linksabout'>
          <FaHome style={{ marginRight: '8px' }} />
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
          <Typography className='abouttops'>
            / Contact
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
   
        <Box>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.7685291565!2d49.690147089047194!3d40.394737008295685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1731066999022!5m2!1str!2saz" 
            width="100%" 
            height="450" 
            style={{ border: 0,marginTop:"15px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
