// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="background" style={{ height: "100%" }}>
      <Navbar />
      <Header />
      <AboutMe />
      <Footer />
    </div>


  );
}

export default App;
