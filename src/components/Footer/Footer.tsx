import React from 'react';
import Icon from '../Icon/Icon';
import './Footer.scss';

const Footer = () => (
  <footer className='wrapper-footer'>
    <div className='container'>
      <div className='link-block'>
        <span>More information about COVID-19 you can find </span>
        <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' target='_blank' className='footer-link' rel='noreferrer'><span className='span-link'>here</span> </a>
      </div>
      <div className='social-block'>
        <a href='https://www.facebook.com/WHO/' target='_blank' rel='noreferrer' className='social-link'><Icon type='facebook' className='social-icon' /></a>
        <a href='https://twitter.com/who' target='_blank' rel='noreferrer' className='social-link'><Icon type='twitter' className='social-icon' /></a>
        <a href='https://www.instagram.com/who/' target='_blank' rel='noreferrer' className='social-link'><Icon type='instagram' className='social-icon' /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
