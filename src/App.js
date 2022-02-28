import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard.jsx';
import Logo from './assets/Logo.svg'

function App() {

  return (
    <div className="App">
      <div className='logo'>
        <div className='logo__wrapper'>
          <img src={Logo} alt="" />
        </div>
        <h1>Quotes Generator</h1>
      </div>
      <QuoteCard />
    </div>
  );
}

export default App;
