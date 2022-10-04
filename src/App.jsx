import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './components/Game'
import './styles/appStyle.css'

function App() {
  return (
    <div className="App">
    <Header />
    <Game />
    <Footer projectName="memory-card" />
    </div>
  );
}

export default App;
