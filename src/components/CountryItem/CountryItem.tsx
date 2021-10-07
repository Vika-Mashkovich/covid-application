import React, { ReactElement } from 'react';
import { ICountryStatistics } from '../../common/types/statisticsTypes';
import './CountryItem.scss';

const CountryItem:React.FC<ICountryStatistics> = (
  { country, newConfirmed, totalConfirmed, newDeaths, totalDeaths },
):ReactElement => (
  <li className='country-item'>
    <span className='name-country'>{country}</span>
    <div className='country-item-statistics'>
      <span>Confirmed</span>
      <span className='big-number'>{totalConfirmed}</span>
      {newConfirmed !== 0 && <span className='small-number'>{`+ ${newConfirmed}`}</span>}
    </div>
    <div className='country-item-statistics'>
      <span className='green-text'>Recovered</span>
      <span className='big-number'>{totalConfirmed - totalDeaths}</span>
    </div>
    <div className='country-item-statistics'>
      <span className='red-text'>Deaths</span>
      <span className='big-number'>{totalDeaths}</span>
      {newDeaths !== 0 && <span className='small-number'>{`+ ${newDeaths}`}</span>}
    </div>
  </li>
);

export default CountryItem;
