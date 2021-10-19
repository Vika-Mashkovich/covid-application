import axios from 'axios';
import { converterCountries } from './converterCountries';
import { converterGlobal } from './converterGlobal';

class StatisticsApi {
  url:string;

  constructor(url:string) {
    this.url = url;
  }

  getCountriesStatistics() {
    return axios
      .get(this.url)
      .then((response) => converterCountries(response.data.Countries))
      .catch(() => []);
  }

  getGlobalStatistics() {
    return axios
      .get(this.url)
      .then((response) => converterGlobal(response.data.Global))
      .catch(() => ({
        newConfirmed: 0,
        totalConfirmed: 0,
        newDeaths: 0,
        totalDeaths: 0,
        totalRecovered: 0,
        date: '',
      }));
  }
}

export default new StatisticsApi('https://api.covid19api.com/summary');
