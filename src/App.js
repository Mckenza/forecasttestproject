import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {

  return (
    <div className = 'wrap_app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
