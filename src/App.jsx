// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Navbar from "./Components/Navbar"
// import Home from "./Components/Home"
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Navbar from "./Components/Navbar";


// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <nav>
//         <Link to="/">Home</Link>
//         {/* <Link to="/about">About</Link> */}
//         {/* <Link to="/contact">Contact</Link> */}
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}
//         <Route path="*" element={<NotFound />} /> {/* 404 page */}
//       </Routes>
//     </Router>
//   );
// }


// function NotFound() {
//   return <h1>404 - Page Not Found</h1>;
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About"; 
import Contact from "./Components/Contact"; 
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;