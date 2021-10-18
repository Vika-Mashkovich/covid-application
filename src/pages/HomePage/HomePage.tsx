import React, { ReactElement } from 'react';
import Icon from '../../components/Icon/Icon';
import './HomePage.scss';

const HomePage:React.FC = ():ReactElement => (
  <main className='wrapper-home'>
    <div className='container'>
      <h1 className='visually-hidden'>Home page</h1>
      <Icon type='doctors' className='home-img' />
      <p className='text'>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, <br /> the outbreak was later recognized as a pandemic by the World Health Organization on 11 March 2020.</p>
    </div>
  </main>
);

export default HomePage;
