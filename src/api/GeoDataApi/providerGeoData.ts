import { IGeoData } from '../../common/types/geoDataTypes';
import { converterGeoData } from './converterGeoData';

class GeoDataApi {
  url:string;

  constructor(url:string) {
    this.url = url;
  }

  getGeoData() {
    let result:IGeoData[] = [];

    fetch(this.url)
      .then((response) => response.json())
      .then((responseData) => {
        result = converterGeoData(responseData.Countries);

        return result;
      })
      .catch((error) => (console.log('error', error)));

    return result;
  }
}

export default new GeoDataApi('https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=&rows=250');
