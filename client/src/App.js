import React, { useContext, useEffect } from 'react';
import shopContext from './context/shop-context'
import './css/App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer'

function App() {
  const context = useContext(shopContext)

  useEffect( () => {
    let token = localStorage.getItem('token')
    if (token) {
      context.authenticatingToken(token)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Navbar />
      <LoginContainer />
      <MainContainer />
    </div>
  );
}

export default App;
