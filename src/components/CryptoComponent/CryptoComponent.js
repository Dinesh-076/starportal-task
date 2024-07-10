import React from 'react';
import './CryptoComponent.css';

const CryptoComponent = () => {

  return (
    <section className='crypto-section'>
    <div className="crypto-dictionary">
      <h1 className="main-heading">Crypto Dictionary</h1>
      <p className="sub-heading">Your one-stop to catch up on all crypto terms</p>
      <div className="image-container">
        <img src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg" alt="Crypto Dictionary" className="main-image" />
        <div className="image-text">
          <h2>Web3 + Degen Glossary</h2>
          <p>Your own crypto dictionary</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CryptoComponent;
