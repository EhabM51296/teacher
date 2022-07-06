import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import ContactUs from './components/contactUs/ContacUs';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home />
      <AboutUs/>
      <Services/>
      <ContactUs/>
    </React.Fragment>
  );
}

export default App;
