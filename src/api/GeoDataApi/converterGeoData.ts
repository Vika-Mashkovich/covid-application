import { CountryGeoData } from '../../common/entities/geoConstructor';
import { IGeoData } from '../../common/types/geoDataTypes';

export const converterGeoData = (geoData: any[]):IGeoData[] => (
  geoData.reduce((acc, geoDataItem) => {
    if (geoDataItem.fields.geo_point_2d) {
      acc.push(new CountryGeoData({
        geoPoint: geoDataItem.fields.geo_point_2d,
        code: geoDataItem.fields.iso2_code,
      }));
    }

    return acc;
  }, []));
