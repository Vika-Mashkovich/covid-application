import { Country } from '../entities/countryConstructor';

export interface IConverterGlobal {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  Date: string,
}

export interface IConverterCountries {
  ID: string,
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
  Premium: object,
}

export interface ICountryStatisticsKeys {
  [key: string]: string | number | undefined,
}

export interface ICountryStatistics extends ICountryStatisticsKeys {
  id?: string,
  country: string,
  countryCode?: string,
  newConfirmed: number,
  totalConfirmed: number,
  newDeaths: number,
  totalDeaths: number,
  totalRecovered: number,
  flag: string,
}

export interface IGlobalStatistics {
  newConfirmed: number,
  totalConfirmed: number,
  newDeaths: number,
  totalDeaths: number,
  totalRecovered: number,
  date: string,
}

export interface ICountryStatisticsState {
  countries: Country[],
  global: IGlobalStatistics,
  page: number,
  limit: number,
  loading: boolean,
  error: null | string,
}

export enum StatisticsActionTypes {
  FETCH_STATISTICS = 'FETCH_STATISTICS',
  FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS',
  FETCH_STATISTICS_GLOBAL_SUCCESS = 'FETCH_STATISTICS_GLOBAL_SUCCESS',
  FETCH_STATISTICS_ERROR = 'FETCH_STATISTICS_ERROR',
  SET_LIST_PAGE = 'SET_LIST_PAGE',
}

interface IFetchStatisticsAction {
  type: StatisticsActionTypes.FETCH_STATISTICS,
}

interface IFetchStatisticsSuccessAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS,
  payload: Country[],
}

interface IFetchGlobalStatisticsSuccessAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_GLOBAL_SUCCESS,
  payload: IGlobalStatistics,
}

interface IFetchStatisticsErrorAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_ERROR,
  payload: string,
}

interface ISetListPage {
  type: StatisticsActionTypes.SET_LIST_PAGE,
  payload: number,
}

export type StatisticsAction =
  IFetchStatisticsAction
  | IFetchStatisticsSuccessAction
  | IFetchStatisticsErrorAction
  | ISetListPage
  | IFetchGlobalStatisticsSuccessAction
