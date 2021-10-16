import React, { ReactElement, useEffect } from 'react';
import { useActions } from '../../store/hooks/useActions';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import Icon from '../Icon/Icon';
import './GlobalItem.scss';

interface IMonthToStringMap{
  [key:string] : string,
}

const GlobalItem:React.FC = ():ReactElement => {
  const { global } = useTypedSelector(
    (state) => state.countriesData,
  );

  const action = useActions();

  useEffect(() => {
    action.fetchStatistics();
  }, []);

  const date: string[] = global.date.split('-');
  let day:string = '';

  if (date.length > 1) {
    day = date[2].substring(0, 2);
  }

  const monthToStringMap:IMonthToStringMap = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  return (
    <div className='global-block'>
      {day ? <span className='global-date'>Last update: {`${monthToStringMap[date[1]]} ${day}, ${date[0]}`}</span> : ''}
      <div className='global-statistics'>
        <div className='global-icon-block'>
          <Icon type='globe' className='globe-icon' />
          <span>GLOBAL</span>
        </div>
        <div className='global-statistics-block'>
          <Icon type='coronaGrey' className='global-statistics-icon' />
          <div className='global-statistics-block-data'>
            <span>Total confirmed</span>
            <span className='big-number'>{global.totalConfirmed}</span>
            {global.newConfirmed !== 0 && <span className='small-number'>{`+ ${global.newConfirmed}`}</span> }
          </div>
        </div>
        <div className='global-statistics-block'>
          <Icon type='logo' className='global-statistics-icon' />
          <div className='global-statistics-block-data'>
            <span className='green-text'>Total recovered</span>
            <span className='big-number'>{global.totalRecovered}</span>
          </div>
        </div>
        <div className='global-statistics-block'>
          <Icon type='coronaRed' className='global-statistics-icon' />
          <div className='global-statistics-block-data'>
            <span className='red-text'>Total deaths</span>
            <span className='big-number'>{global.totalDeaths}</span>
            {global.newDeaths !== 0 && <span className='small-number'>{`+ ${global.newDeaths}`}</span> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalItem;
