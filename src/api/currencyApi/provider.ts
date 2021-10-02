import { converter } from './converter';

class CurrencyApi {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  getCurrency() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => converter(responseData.Countries))
      .catch((error) => console.log(error));
  }
}

export default new CurrencyApi('https://api.covid19api.com/summary');
