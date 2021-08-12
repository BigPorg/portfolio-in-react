// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
// import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  const [page, setPage] = useState("about");

  const renderPage = (currentPage) => {
    if (currentPage === "about") {
      return <AboutMe />
    } else if (currentPage === "contact") {
      return <Contact />
    } else if (currentPage === "portfolio") {
      return <Portfolio />
    }
  }

  const handlePageChange = (newPage) => setPage(newPage)

  return (

    <div id="background" style={{ height: "100%" }}>
      <div id="overlay" style={{ height: "100%" }}>
        <Navbar page={page} setPage={handlePageChange} />
        {renderPage(page)}
        <Footer />
      </div>
    </div>
  )
}

export default App;