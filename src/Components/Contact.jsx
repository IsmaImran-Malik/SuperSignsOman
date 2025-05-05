import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      {/* Contacts Section */}
      <div className="contact-cont">
      <h1 className="services-heading">CONTACT US</h1>
        <div className="contact-section">
          <ul className="contact-list">
            <li>
              <img src="assets/Contact-icons/Icon-1.png" alt="Instagram Icon" className="contact-icon" />
              <a href="https://www.instagram.com/super._.signs?igsh=MXFodnB0Z2Q3ZHZnbA==" target="_blank" rel="noopener noreferrer">
                @supersigns
              </a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-2.png" alt="Email Icon" className="contact-icon" />
              <a href="mailto:supersigns221@gmail.com">supersigns221@gmail.com</a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-3.png" alt="Phone Icon" className="contact-icon" />
              <a href="tel:+96871174833">+968 7117 4833</a>
            </li>
            <li>
              <img src="assets/Contact-icons/Icon-4.png" alt="Location Icon" className="contact-icon" />
              <span>Wadi Al Kabir, Sultanate of Oman.</span>
            </li>
          </ul>
        </div>

        <div className="Map-container">
            <iframe className="Map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29254.485674643!2d58.55257286291937!3d23.575240976598803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f74a3569447d%3A0x6216344f396e4162!2sWadi%20Kabir%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1739877576530!5m2!1sen!2s" width="1300vw" height="450" ></iframe>
        </div>
      </div>
        
    </div>
  );
};

export default Contact;