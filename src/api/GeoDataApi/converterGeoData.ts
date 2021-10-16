import { CountryGeoData } from '../../common/entities/geoConstructor';
import { IConverterGeoData } from '../../common/types/geoDataTypes';

export const converterGeoData = (geoData: any[]):IConverterGeoData[] => (
  geoData.reduce((acc, geoDataItem) => {
    if (geoDataItem.fields.geo_point_2d !== undefined) {
      acc.push(new CountryGeoData({
        geoPoint: geoDataItem.fields.geo_point_2d,
        code: geoDataItem.fields.iso2_code,
      }));
    }

    return acc;
  }, []));
