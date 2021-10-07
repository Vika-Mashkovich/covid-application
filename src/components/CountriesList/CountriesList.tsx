import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CountriesList.scss';
import { ICountryStatistics, ICountryStatisticsState } from '../../common/types/statisticsTypes';
import * as CountriesActionCreators from '../../store/action-creators/countriesCreators';
import CountryItem from '../CountryItem/CountryItem';

const CountriesList:React.FC = ():ReactElement => {
  const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(CountriesActionCreators, dispatch);
  };

  const { сountries, page, limit, loading, error } = useSelector(
    (state:ICountryStatisticsState) => state,
  );

  const action = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    action.fetchStatistics();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const paginate = сountries.slice((page - 1) * limit, page * limit);

  return (
    <div>
      <div className='paginate'>
        {pages.map((pageNumber) => (
          <div
            className={pageNumber === page ? 'page page-active' : 'page'}
            role='button'
            onClick={() => action.setListPage(pageNumber)}
            onKeyPress={() => action.setListPage(pageNumber)}
            tabIndex={0}
            key={pageNumber}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      <ul className='countries-list'>
        {paginate.map((country:ICountryStatistics) => (
          <CountryItem
            key={country.id}
            country={country.country}
            newConfirmed={country.newConfirmed}
            totalConfirmed={country.totalConfirmed}
            newDeaths={country.newDeaths}
            totalDeaths={country.totalDeaths}
          />
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
