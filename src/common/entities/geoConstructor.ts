import { LatLngExpression } from 'leaflet';
import { IGeoData } from '../types/geoDataTypes';

export class CountryGeoData {
  geoPoint:LatLngExpression;
  code: string;

  constructor(props: IGeoData) {
    this.geoPoint = props.geoPoint;
    this.code = props.code;
  }
}
