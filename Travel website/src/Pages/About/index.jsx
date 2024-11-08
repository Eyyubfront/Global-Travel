import React from 'react';
import { Link } from 'react-router-dom';  // Link bileşenini kullanıyoruz
import { FaHome } from 'react-icons/fa';  // React Icons'dan Home ikonu ekliyoruz
import { Typography } from '@mui/material';
import "./about.css"
import Footer from '../../Companents/Footer';
const About = () => {
  return (
  <>
   <div className='about'>
      <div className='top__linksabout'>
  
          <FaHome style={{ marginRight: '8px' }} />
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
          Home 
        </Link>
        <Typography className='abouttops'>
        / About
        </Typography>
      </div>
      <h1>About Page</h1>
      <p className='about_text'>International travel, or global travel, means that people move from one country to another for various reasons. These reasons include purposes such as tourism, business activities and education. With increased globalization, technological advances, and more accessible means of transportation, international travel has become an important part of modern life and has enabled connections between countries and cultures.
      Operating since 2000, our company has always strived to provide better services to its customers to meet the evolving demands of global travel and tourism. During this period, we have adapted to the changes in the international tourism market and introduced new services and products that meet the wishes of our customers. As technology plays an increasingly important role in the world of travel, we continue to work to make our customers' experience easier and more comfortable with innovative solutions.</p>
    </div>
<Footer/>
  </>
  );
}

export default About;
