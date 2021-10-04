export interface ICountryStatistics {
  сountry: string;
  totalConfirmed: number;
}

export interface ICountryStatisticsState {
  сountries: object,
  page: number,
  limit: number,
  loading: boolean,
  error: null | string;
}

export enum StatisticsActionTypes {
  FETCH_STATISTICS = 'FETCH_STATISTICS',
  FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS',
  FETCH_STATISTICS_ERROR= 'FETCH_STATISTICS_ERROR',
  SET_LIST_PAGE = 'SET_LIST_PAGE',
}

interface IFetchStatisticsAction {
  type: StatisticsActionTypes.FETCH_STATISTICS,
  payload: any[],
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
