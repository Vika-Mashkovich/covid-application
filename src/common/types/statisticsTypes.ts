export interface ICountryStatistics {
  id?:string;
  country: string;
  countryCode?:string;
  newConfirmed:number;
  totalConfirmed: number;
  newDeaths:number;
  totalDeaths:number;
}

export interface ICountryStatisticsState {
  сountries: ICountryStatistics[],
  page: number,
  limit: number,
  loading: boolean,
  error: null | string;
}

export interface IConverterGlobal {
  NewConfirmed:number,
  TotalConfirmed:number,
  NewDeaths:number,
  TotalDeaths:number,
  Date:string,
}

// export interface IconverterCountries {
//   ID:string;
//   Country: string;
//   CountryCode:string;
//   Slug:string;
//   NewConfirmed:number;
//   TotalConfirmed: number;
//   NewDeaths:number;
//   TotalDeaths:number;
//   NewRecovered:number;
//   TotalRecovered:number;
//   Date:string;
//   Premium:{},
// }

export enum StatisticsActionTypes {
  FETCH_STATISTICS = 'FETCH_STATISTICS',
  FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS',
  FETCH_STATISTICS_ERROR= 'FETCH_STATISTICS_ERROR',
  SET_LIST_PAGE = 'SET_LIST_PAGE',
}

interface IFetchStatisticsAction {
  type: StatisticsActionTypes.FETCH_STATISTICS,
}

interface IFetchStatisticsSuccessAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS,
  payload: any[],
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
