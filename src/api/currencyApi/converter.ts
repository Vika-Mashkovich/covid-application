import { Currency } from '../../common/entities/currencyConstructor';

export const converter = (currencies: Array<any>) => currencies.reduce((acc, currency) => {
  acc.push(new Currency({
    usdIn: currency.USD_in,
    usdOut: currency.USD_out,
    eurIn: currency.EUR_in,
    eurOut: currency.EUR_out,
    street: currency.street,
    city: currency.name,
    sapId: currency.sap_id,
  }));

  return acc;
}, []);
