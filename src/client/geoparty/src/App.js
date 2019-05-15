import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <div className="App">
     <Header />
     <Navbar />
     <MainContainer />
    </div>
  );
}

export default App;
