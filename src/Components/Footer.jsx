import React, { useState } from 'react';
import "./Footer.css";


const Footer = ()=>{
  return (
    <div>
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Super Signs. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer;