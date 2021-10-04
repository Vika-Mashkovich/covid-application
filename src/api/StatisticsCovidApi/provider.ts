import { converter } from './converter';

class StatisticsCovidApi {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  getCountryStatistics() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => converter(responseData.Countries))
      .catch((error) => console.log(error));
  }

  getGlobalStatistics() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => responseData.Global)
      .catch((error) => console.log(error));
  }
}

export default new StatisticsCovidApi('https://api.covid19api.com/summary');
