import { LatLngExpression } from 'leaflet';

export interface IGeoData{
  geoPoint:LatLngExpression,
  code:string,
  }

export interface IGeoDataState {
  loading: boolean,
  error: null | string,
  geoData: IGeoData[],
}

export enum GeoDataActionTypes {
  FETCH_GEO_DATA = 'FETCH_GEO_DATA',
  FETCH_GEO_DATA_SUCCESS = 'FETCH_GEO_DATA_SUCCESS',
  FETCH_GEO_DATA_ERROR= 'FETCH_GEO_DATA_ERROR',
}

interface IFetchGeoDataAction {
  type: GeoDataActionTypes.FETCH_GEO_DATA,
}

interface IFetchGeoDataSuccessAction {
  type: GeoDataActionTypes.FETCH_GEO_DATA_SUCCESS,
  payload: IGeoData[],
}

interface IFetchGeoDataErrorAction {
  type: GeoDataActionTypes.FETCH_GEO_DATA_ERROR,
  payload: string,
}

export type GeoDataAction =
IFetchGeoDataAction
| IFetchGeoDataSuccessAction
| IFetchGeoDataErrorAction
