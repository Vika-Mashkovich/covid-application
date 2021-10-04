import React, { ReactElement, useEffect, useState } from 'react';
import './StatisticsPage.scss';
import { ICountryStatistics } from '../../common/types/statisticsTypes';
import StatisticsCovidApi from '../../api/StatisticsCovidApi/provider';

const StatisticsPage:React.FC = ():ReactElement => {
  const [countryStatistics, setCountryStatistics] = useState([]);

  useEffect(() => {
    StatisticsCovidApi.getCountryStatistics()
      .then(setCountryStatistics);
  }, []);

  let listOfCurrencies: Array<any> = [];

  if (countryStatistics) {
    listOfCurrencies = countryStatistics.map((item: ICountryStatistics) => (
      <div key={item.сountry} className='item-currency'>
        <span>{item.сountry}</span>
        <span>{item.totalConfirmed}</span>
      </div>
    ));
  }

  return (
    <main className='wrapper-statistics'>
      <div className='container'>
        <h1 className='heading-h1'>Statistics</h1>
        {listOfCurrencies}
      </div>
    </main>
  );
};

export default StatisticsPage;
