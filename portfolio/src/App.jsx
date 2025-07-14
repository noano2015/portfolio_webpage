import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';

function App() {

  return (
    <div>
      <Header/>
      <Nav sections={["About Me", "Projects", "Contact Me"]} nameOfClass="General"/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
