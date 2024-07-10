import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faTelegram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import './SocialMediaIcons.css';

function SocialMediaIcons() {
  return (
    <div className="social-media-icons d-flex justify-content-center">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="icon twitter" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faDiscord} size="2x" className="icon discord" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faTelegram} size="2x" className="icon telegram" />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faSpotify} size="2x" className="icon spotify" />
      </div>
    </div>
  );
}

export default SocialMediaIcons;
