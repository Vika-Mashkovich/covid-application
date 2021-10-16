import { LatLngExpression } from 'leaflet';
import { IConverterGeoData } from '../types/geoDataTypes';

export class CountryGeoData {
  geoPoint:LatLngExpression;
  code: string;

  constructor(props: IConverterGeoData) {
    this.geoPoint = props.geoPoint;
    this.code = props.code;
  }
}
