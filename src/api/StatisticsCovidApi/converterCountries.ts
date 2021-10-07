import { Country } from '../../common/entities/countryConstructor';
import { ICountryStatistics } from '../../common/types/statisticsTypes';

export const converterCountries = (countries: any[]):ICountryStatistics[] => (
  countries.reduce((acc, country) => {
    acc.push(new Country({
      id: country.ID,
      country: country.Country,
      countryCode: country.CountryCode,
      newConfirmed: country.NewConfirmed,
      totalConfirmed: country.TotalConfirmed,
      newDeaths: country.NewDeaths,
      totalDeaths: country.TotalDeaths,
    }));

    return acc;
  }, []));
