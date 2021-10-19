import axios from 'axios';
import { converterGeoData } from './converterGeoData';

class GeoDataApi {
  url:string;

  constructor(url:string) {
    this.url = url;
  }

  getGeoData() {
    return axios
      .get(this.url)
      .then((response) => converterGeoData(response.data.records))
      .catch(() => []);
  }
}

export default new GeoDataApi('https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=&rows=250');
