import React, { useState } from 'react';
import './CryptoFollowComponent.css';

const CryptoFollowComponent = () => {
  const cards = [
    {
      title: 'How to plan your retirement with crypto?',
      image: 'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png',
      video: '/videos/video1.mp4',
    },
    {
      title: 'Why are there limited Bitcoin?',
      image: 'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png',
      video: '/videos/video2.mp4',
    },
    {
      title: 'How does Uniswap actually work?',
      image: 'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png',
      video: '/videos/video3.mp4',
    },
    {
      title: 'How to spot crypto projects to invest in?',
      image: 'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png',
      video: '/videos/video4.mp4',
    },
  ];

  return (
    <div className="crypto-creators">
      <h1 className="main-heading">Top Crypto Creators and Projects to Follow</h1>
      <p className="sub-heading">Answers to your crypto doubts, straight from the experts</p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleToggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className='crypto-follow'>
    <div className="crypto-card__" onClick={handleToggleVideo}>
      {!isVideoPlaying ? (
        <div className="card-image-container">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-overlay">
            <div className="play-button">&#9658;</div>
          </div>
        </div>
      ) : (
        <video className="card-video" src={card.video} controls autoPlay />
      )}
      <div className="card-title">{card.title}</div>
    </div>
    </section>
  );
};

export default CryptoFollowComponent;
