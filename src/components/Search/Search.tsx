import React, { ReactElement, useState } from 'react';
import { Country } from '../../common/entities/countryConstructor';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import CountryItem from '../CountryItem/CountryItem';
import Icon from '../Icon/Icon';
import '../../core/colors.scss';
import './Search.scss';

const Search: React.FC = (): ReactElement => {
  const { countries } = useTypedSelector((state) => state.countriesData);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [countrySearch, setCountrySearch] = useState<Array<Country>>([]);

  const handleOnSearch = () => {
    if (valueSearch === '') {
      return;
    }

    const search = countries.filter((item) => (item.country.toLowerCase().includes(valueSearch.toLowerCase())));

    setCountrySearch(search);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
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
    <section className='country-search-section'>
      {countrySearch.length !== 0 && (
        <div className='search-results-block'>
          <span className='search-results-text'>Search results</span>
          <Icon type='close' className='btn-close' role='button' onClick={() => handleDeletion()} />
          <ul className='search-countries-list'>
            {countrySearch.map((country: Country) => (
              <CountryItem
                key={country.id}
                countryOptions={country}
                className={countrySearch.length === 1 ? 'country-item-single' : ''}
              />
            ))}
          </ul>
        </div>
      )}
      <div className='search-input-block'>
        <input type='text' value={valueSearch} className='search-input' placeholder='Country search' onChange={(e) => setValueSearch(e.target.value)} onKeyPress={(e) => handleKeyPress(e)} />
        <Icon type='search' className='search-icon' role='button' onClick={() => handleOnSearch()} />
      </div>
    </section>
  );
};

export default Search;
