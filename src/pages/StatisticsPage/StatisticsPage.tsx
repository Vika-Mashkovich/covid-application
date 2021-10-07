import React, { ReactElement } from 'react';
import CountriesList from '../../components/CountriesList/CountriesList';
import './StatisticsPage.scss';

const StatisticsPage:React.FC = ():ReactElement => (
  <main className='wrapper-statistics'>
    <div className='container'>
      <h1 className='heading-h1'>Statistics</h1>
      <CountriesList />
    </div>
  </main>
);

export default StatisticsPage;
