import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <Navbar />
        <MainContainer />
      </div>
    </GlobalState>
  );
}

export default App;
