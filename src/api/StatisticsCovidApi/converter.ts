import { Country } from '../../common/entities/countryConstructor';

export const converter = (currencies: any[]) => currencies.reduce((acc, currency) => {
  acc.push(new Country({
    сountry: currency.Country,
    totalConfirmed: currency.TotalConfirmed,
  }));

  return acc;
}, []);
