import { CountryGeoData } from '../../common/entities/geoConstructor';

export const converterGeoData = (geoData: any[]):CountryGeoData[] => (
  geoData.reduce((acc, geoDataItem) => {
    if (geoDataItem.fields.geo_point_2d) {
      acc.push(new CountryGeoData({
        geoPoint: geoDataItem.fields.geo_point_2d,
        code: geoDataItem.fields.iso2_code,
      }));
    }

    return acc;
  }, []));
