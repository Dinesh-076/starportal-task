import CryptoComponent from './components/CryptoComponent/CryptoComponent';
import CryptoFollowComponent from './components/CryptoFollowComponent/CryptoFollowComponent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleComponent from './components/ToggleComponent/ToggleComponent';
import React, { useState, useEffect } from 'react';
import LoadingComponent from './components/Loading/LoadingComponent';
import './App.css'


function App() {

const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return ( <div className={isLoading ? 'loading-background' : ''}>
  {isLoading ? (
    <LoadingComponent />
  ) :(
    <div className="App">
      <Header />
      <MainContent />
      <ToggleComponent />
      <CryptoFollowComponent />
      <CryptoComponent />
      <Footer />
    </div>
    )}</div>
  )
}

export default App;