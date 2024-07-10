import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href='/' className="logo">intract.</a>
      <nav className={`nav ${isSearchFocused ? 'hide' : ''}`}>
        <a href="/">Compass</a>
        <a href="/">Explore</a>
        <a href="/">Academy</a>
        <a href="/">NFTs</a>
        <a href="/">For Projects</a>
      </nav>
      <div className="search-container">
        <div className='search-bar-wrapper'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input
            type="text"
            className={`search-bar ${isSearchFocused ? 'focused' : ''}`}
            placeholder="Search for ecosystems, trending quests etc..."
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>
      </div>
      <section className='broadcast__'>
        <div>
          <img src="https://intract.io/assets/broadcast_or-04af786c.svg" alt='broadcast' />
        </div>
      </section>
      <button className="sign-in">Sign In</button>
    </header>
  );
};

export default Header;
