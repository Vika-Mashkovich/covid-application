import { Country } from '../../common/entities/countryConstructor';
import { Flag } from '../../common/entities/flagConstructor';

export const converterCountries = (countries: any[], flags: Flag[]): Array<Country> => (
  countries.reduce((acc, country) => {
    const flagCountry = flags.find((item: Flag) => (
      item.countryCode === country.CountryCode
    ));

    let flagIcon: string = '';

    if (flagCountry) {
      flagIcon = flagCountry.flag;
    }

    acc.push(new Country({
      id: country.ID,
      country: country.Country.split(',').reverse().join(' '),
      countryCode: country.CountryCode,
      newConfirmed: country.NewConfirmed,
      totalConfirmed: country.TotalConfirmed,
      newDeaths: country.NewDeaths,
      totalDeaths: country.TotalDeaths,
      totalRecovered: country.TotalConfirmed - country.TotalDeaths,
      flag: flagIcon,
    }));

    return acc;
  }, []));
