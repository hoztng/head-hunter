import React from 'react';
import './App.css'
import './assets/fonts/fonts.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '@routes/index';
import Footer from '@layout/Footer';
import Navbar from '@layout/Navbar';

function App(){

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navbar/>
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

App as React.FC;

export default App
