import React from 'react';
import './Footer.css';
import SocialMediaIcons from '../SocialMedia/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">intract.</div>
          <p>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
        </div>
        <div className="footer-section">
          <h4>INTRACT</h4>
          <ul>
            <li><a href="/">Explore Quests</a></li>
            <li><a href="/">Communities</a></li>
            <li><a href="/">Alpha Hub</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>EARN</h4>
          <ul>
            <li><a href="/">Refer & Earn</a></li>
            <li><a href="/">Leaderboard</a></li>
            <li><a href="/">Achievements</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="/">Product Roadmap</a></li>
            <li><a href="/">Affiliate Program</a></li>
            <li><a href="/">Sign up Program</a></li>
            <li><a href="/">Growth Community</a></li>
            <li><a href="/">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Create your quest</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Community Guidelines</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>
          <strong>Disclaimer:</strong> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
      </div>
      <div className="footer-bottom">
        <p>CREATED BY <a href="/">INTRACT</a></p>
        <div className="social-icons">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
