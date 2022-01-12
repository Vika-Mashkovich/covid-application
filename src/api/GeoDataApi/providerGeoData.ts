import axios from 'axios';
import { GEO_DATA_API_URL } from '../constants/urls';
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

export default new GeoDataApi(GEO_DATA_API_URL);
