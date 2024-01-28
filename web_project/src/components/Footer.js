import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaSnapchat, FaTiktok, FaCreditCard, FaCcJcb, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Make a POST request to your Django API to subscribe the user
    axios.post('http://localhost:8000/api/subscribe/', { email })
      .then(response => {
        // Handle the successful response, e.g., show a success message
        console.log('Subscription successful:', response.data);
      })
      .catch(error => {
        // Handle errors, e.g., show an error message
        console.error('Subscription error:', error);
      });
  };

  return (
    <footer className="footer">
      <h1>STAY CONNECTED</h1>
      <div className="footer-social2">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer"><FaSnapchat /></a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="footer-content">
      <div className="footer-section">
          <h2>LET US HELP YOU</h2>
          <ul className="footer-links">
            <li><a href="/">Shipping Policy</a></li>
            <li><a href="/">Return and Exchange</a></li>
            <li><a href="/">Refund Policy</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>GET TO KNOW US</h2>
          <ul className="footer-links">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Our Outlets</a></li>
          </ul>
        </div>

        <div className="footer-section">
        <div className="footer-section">
          <h2>CUSTOMER CARE</h2>
          <p>Timings: 3PM - 12AM (Mon - Sun)</p>
          <p>Call: +(92)301-9229998</p>
          <p>E-mail: care@sclothers.com</p>
        </div>
        </div>
        

        <div className="footer-section">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
     
      <div className="footer-bottom">
      <div className="footer-section">
          <h2>Secure Payment Methods</h2>
          <div className="footer-payment-methods">
            <FaCcVisa className="payment-icon" />
            <FaCcMastercard className="payment-icon" />
            <FaCcJcb className="payment-icon" />
            <FaCreditCard className="payment-icon" />
          </div>
        </div>
        <p>&copy; 2024 Clothing Shop. All Rights Reserved.</p>
        <p>Powered by Rumpala.co.uk</p>
      </div>
      
    </footer>
  );
}

export default Footer;
