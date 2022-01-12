import axios from 'axios';
import { Country } from '../../common/entities/countryConstructor';
import { STATISTICS_API_URL } from '../constants/urls';
import { getFlags } from '../FlagsApi/providerFlags';
import { converterCountries } from './converterCountries';
import { converterGlobal } from './converterGlobal';

class StatisticsApi {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  getCountriesStatistics() {
    return axios
      .get(this.url)
      .then(async (response) => {
        const flags = await getFlags();

        return converterCountries(response.data.Countries, flags);
      })
      .catch(() => [] as Country[]);
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

export default new StatisticsApi(STATISTICS_API_URL);
