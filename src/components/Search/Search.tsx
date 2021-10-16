import React, { ReactElement, useState } from 'react';
import { ICountryStatistics } from '../../common/types/statisticsTypes';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import CountryItem from '../CountryItem/CountryItem';
import Icon from '../Icon/Icon';
import './Search.scss';

const Search:React.FC = ():ReactElement => {
  const { countries } = useTypedSelector(
    (state) => state.countriesData,
  );
  const [valueSearch, setValueSearch] = useState<string>('');
  const [countrySearch, setCountrySearch] = useState<Array<ICountryStatistics>>([]);

  const handleOnSearch = () => {
    if (valueSearch !== '') {
      const search = countries.filter((item) => (item.country.toLowerCase().includes(valueSearch.toLowerCase())));

      setCountrySearch(search);
    }
  };

  const handleKeyPress = (e:React.KeyboardEvent<HTMLElement>) => {
    const key = e.keyCode || e.which;

    if (key === 13) {
      handleOnSearch();
    }
  };

  const handleDeletion = () => {
    setValueSearch('');
    setCountrySearch([]);
  };

  return (
    <div>
      {countrySearch.length !== 0 && (
      <div className='search-results-block'>
        <span className='search-results'>Search results</span>
        <Icon type='close' className='btn-close' onClick={async () => handleDeletion()} />
        <ul className='countries-list countries-list-search'>
          {countrySearch.map((country:ICountryStatistics) => (
            <CountryItem
              key={country.id}
              flag={country.flag}
              country={country.country}
              newConfirmed={country.newConfirmed}
              totalConfirmed={country.totalConfirmed}
              newDeaths={country.newDeaths}
              totalDeaths={country.totalDeaths}
              totalRecovered={country.totalRecovered}
            />
          ))}
        </ul>
      </div>
      ) }
      <div className='countrySearch'>
        <input type='text' value={valueSearch} className='search' placeholder='Country search' onChange={(e) => setValueSearch(e.target.value)} onKeyPress={(e) => handleKeyPress(e)} />
        <Icon type='search' className='search-icon' onClick={async () => handleOnSearch()} />
      </div>
    </div>
  );
};

export default Search;
