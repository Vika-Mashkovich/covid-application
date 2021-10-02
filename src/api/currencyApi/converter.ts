import { Currency } from '../../common/entities/currencyConstructor';

export const converter = (currencies: any[]) => currencies.reduce((acc, currency) => {
  acc.push(new Currency({
    сountry: currency.Country,
    totalConfirmed: currency.TotalConfirmed,
  }));

  return acc;
}, []);
