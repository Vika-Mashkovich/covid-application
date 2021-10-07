import React, { ReactElement } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Header.scss';

const Header:React.FC = ():ReactElement => {
  const history = useHistory();

  return (
    <header className='wrapper-header'>
      <div className='container'>
        <div className='logo-block'>
          <Icon type='logo' className='logo' onClick={async () => history.push('/')} />
          <span
            role='link'
            tabIndex={0}
            className='logo-text'
            onClick={async () => history.push('/')}
            onKeyPress={async () => history.push('/')}
          >
            COVID-19
          </span>
        </div>
        <nav className='navigation'>
          <ul className='menu'>
            <li className='menu-item'><NavLink exact to='/'>HOME</NavLink></li>
            <li className='menu-item'><NavLink to='/statistics'>STATISTICS</NavLink></li>
            <li className='menu-item'><NavLink to='/prevention'>PREVENTION</NavLink></li>
            <li className='menu-item'><NavLink to='/symptoms'>SYMPTOMS</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
