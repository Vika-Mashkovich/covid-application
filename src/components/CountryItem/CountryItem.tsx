import React, { ReactElement } from 'react';
import { ICountryStatistics } from '../../common/types/statisticsTypes';
import './CountryItem.scss';

interface ICountryItem{
  countryOptions: ICountryStatistics;
}

const CountryItem:React.FC<ICountryItem> = ({ countryOptions }):ReactElement => (
  <li className='country-item'>
    <div className='country-item-flag'>
      <img src={countryOptions.flag} alt='flag' className='flag-icon' />
    </div>
    <span className='name-country'>{countryOptions.country}</span>
    <div className='country-item-statistics'>
      <span>Confirmed</span>
      <span className='big-number'>{countryOptions.totalConfirmed}</span>
      {countryOptions.newConfirmed !== 0 && <span className='small-number'>{`+ ${countryOptions.newConfirmed}`}</span>}
    </div>
    <div className='country-item-statistics'>
      <span className='green-text'>Recovered</span>
      <span className='big-number'>{countryOptions.totalRecovered}</span>
    </div>
    <div className='country-item-statistics'>
      <span className='red-text'>Deaths</span>
      <span className='big-number'>{countryOptions.totalDeaths}</span>
      {countryOptions.newDeaths !== 0 && <span className='small-number'>{`+ ${countryOptions.newDeaths}`}</span>}
    </div>
  </li>
);

export default CountryItem;
