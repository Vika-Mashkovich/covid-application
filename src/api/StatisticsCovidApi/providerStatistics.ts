import axios from 'axios';
import { IConverterGlobal, IConverterCountries } from '../../common/types/statisticsTypes';
import { converterCountries } from './converterCountries';
import { converterGlobal } from './converterGlobal';

interface IGet{
  ID:string,
  Message:string,
  Global:IConverterGlobal,
  Countries:IConverterCountries[]
}

class StatisticsApi {
  url:string;

  constructor(url:string) {
    this.url = url;
  }

  getCountriesStatistics() {
    return axios
      .get<IGet>(this.url)
      .then((response) => converterCountries(response.data.Countries))
      .catch((error) => (console.log('error', error)));
  }

  getGlobalStatistics() {
    return axios
      .get<IGet>(this.url)
      .then((response) => converterGlobal(response.data.Global))
      .catch((error) => (console.log('error', error)));
  }
}

export default new StatisticsApi('https://api.covid19api.com/summary');
