import React, { ReactElement, useEffect } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import { useActions } from '../../store/hooks/useActions';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import Icon from '../Icon/Icon';
import { Country } from '../../common/entities/countryConstructor';
import '../../core/colors.scss';
import './CountriesList.scss';

interface ICountriesList {
  sortingValue: string,
}

const CountriesList: React.FC<ICountriesList> = ({ sortingValue }): ReactElement => {
  const { countries, page, limit, loading, error } = useTypedSelector(
    (state) => state.countriesData,
  );
  const action = useActions();

  useEffect(() => {
    action.fetchStatistics();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>An error has occurred, please try refreshing the page.</h1>;
  }

  const numberOfPages: number = Math.ceil(countries.length / limit);
  const pages = Array.from(Array(numberOfPages).keys(), (num) => num + 1);

  const sortCountriesFromMoreToLess = (array: Array<Country>, key: string) => array.sort((a, b) => {
    const A: number = Number(a[key as keyof Country]);
    const B: number = Number(b[key as keyof Country]);

    return (B - A);
  });

  const sortCountriesFromLessToMore = (array: Array<Country>, key: string) => array.sort((a, b) => {
    const A: number = Number(a[key as keyof Country]);
    const B: number = Number(b[key as keyof Country]);

    return (A - B);
  });

  const sortCountriesAlphabetically = (array: Array<Country>, key: string) => array.sort((a, b) => {
    const nameA: string = String(a[key as keyof Country]).replace(/\s/g, '').toLowerCase();
    const nameB: string = String(b[key as keyof Country]).replace(/\s/g, '').toLowerCase();

    if (nameA < nameB) { return -1; }

    if (nameA > nameB) { return 1; }

    return 0;
  });

  const applySorting = () => {
    switch (sortingValue) {
      case 'sorting':
        return sortCountriesAlphabetically(countries, 'country');
      case 'most-confirmed':
        return sortCountriesFromMoreToLess(countries, 'totalConfirmed');
      case 'most-recovered':
        return sortCountriesFromMoreToLess(countries, 'totalRecovered');
      case 'most-deaths':
        return sortCountriesFromMoreToLess(countries, 'totalDeaths');
      case 'most-new-confirmed':
        return sortCountriesFromMoreToLess(countries, 'newConfirmed');
      case 'most-new-deaths':
        return sortCountriesFromMoreToLess(countries, 'newDeaths');
      case 'least-confirmed':
        return sortCountriesFromLessToMore(countries, 'totalConfirmed');
      case 'least-recovered':
        return sortCountriesFromLessToMore(countries, 'totalRecovered');
      case 'least-deaths':
        return sortCountriesFromLessToMore(countries, 'totalDeaths');
      case 'least-new-confirmed':
        return sortCountriesFromLessToMore(countries, 'newConfirmed');
      case 'least-new-deaths':
        return sortCountriesFromLessToMore(countries, 'newDeaths');
      default:
        return countries;
    }
  };

  applySorting();

  const paginateCountries = countries.slice((page - 1) * limit, page * limit);

  return (
    <section className='countries-list-section'>
      <div className='paginate'>
        {pages.map((pageNumber) => (
          <div
            key={pageNumber}
            className={pageNumber === page ? 'page page-active' : 'page'}
            role='button'
            tabIndex={0}
            onClick={() => action.setListPage(pageNumber)}
            onKeyPress={() => action.setListPage(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      <Icon type='coronaGrayBig' className='page-coronaGrayBig' />
      <ul className='countries-list'>
        {paginateCountries.map((country: Country) => (
          <CountryItem
            key={country.id}
            countryOptions={country}
          />
        ))}
      </ul>
    </section>
  );
};

export default CountriesList;
