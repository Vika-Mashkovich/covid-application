import { Country } from '../../common/entities/countryConstructor';
import { IConverterFlags } from '../../common/types/flagsTypes';
import { ICountryStatistics } from '../../common/types/statisticsTypes';
import Flags from '../MOCK/flagsData/flags.json';

export const converterCountries = (countries: any[]):ICountryStatistics[] => (
  countries.reduce((acc, country) => {
    const flags = Flags as Array<IConverterFlags>;
    const flagCountry:IConverterFlags | undefined = flags.find((item:IConverterFlags) => (
      item.CountryCode === country.CountryCode
    ));
    let flagIcon:string = '';

    if (flagCountry) {
      flagIcon = flagCountry.flagBase64;
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
