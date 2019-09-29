import React from 'react';
import logo from './logo.svg';
import Card from './components/card.js';
import LRCard from './components/LRcard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card />
        {/*<LRCard />*/}
      </header>
    </div>
  );
}

export default App;
