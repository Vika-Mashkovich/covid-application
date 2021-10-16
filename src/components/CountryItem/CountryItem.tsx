import React, { ReactElement } from 'react';
import './CountryItem.scss';

interface ICountryItem{
  flag: string,
  country: string;
  newConfirmed:number;
  totalConfirmed: number;
  newDeaths:number;
  totalDeaths:number;
  totalRecovered:number;
}

const CountryItem:React.FC<ICountryItem> = (
  { flag, country, newConfirmed, totalConfirmed, newDeaths, totalDeaths, totalRecovered },
):ReactElement => (
  <li className='country-item'>
    <div className='country-item-flag'>
      <img src={flag} alt='flag' className='flag-icon' />
    </div>
    <span className='name-country'>{country}</span>
    <div className='country-item-statistics'>
      <span>Confirmed</span>
      <span className='big-number'>{totalConfirmed}</span>
      {newConfirmed !== 0 && <span className='small-number'>{`+ ${newConfirmed}`}</span>}
    </div>
    <div className='country-item-statistics'>
      <span className='green-text'>Recovered</span>
      <span className='big-number'>{totalRecovered}</span>
    </div>
    <div className='country-item-statistics'>
      <span className='red-text'>Deaths</span>
      <span className='big-number'>{totalDeaths}</span>
      {newDeaths !== 0 && <span className='small-number'>{`+ ${newDeaths}`}</span>}
    </div>
  </li>
);

export default CountryItem;
