import React, { ReactElement } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Icon from '../Icon/Icon';
import '../../core/colors.scss';
import './Header.scss';

const Header: React.FC = (): ReactElement => {
  const history = useHistory();

  return (
    <header className='wrapper-header'>
      <div className='container'>
        <div
          className='logo-block'
          onClick={() => history.push('/')}
          onKeyPress={() => history.push('/')}
          role='link'
          tabIndex={0}
        >
          <Icon type='logo' className='logo' />
          <span className='logo-text'>COVID-19</span>
        </div>
        <nav className='navigation'>
          <ul className='menu'>
            <li className='menu-item'><NavLink exact to='/'><span className='menu-item-span'>HOME</span></NavLink></li>
            <li className='menu-item'><NavLink to='/statistics'><span className='menu-item-span'>STATISTICS</span></NavLink></li>
            <li className='menu-item'><NavLink to='/prevention'><span className='menu-item-span'>PREVENTION</span></NavLink></li>
            <li className='menu-item'><NavLink to='/symptoms'><span className='menu-item-span'>SYMPTOMS</span></NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
