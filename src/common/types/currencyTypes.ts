export interface ICurrencyData {
  сountry: string;
  totalConfirmed: number;
}

export interface ICurrencyState {
  currencies: object,
  page: number,
  limit: number,
  loading: boolean,
  error: null | string;
}

export enum CurrencyActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
  FETCH_CURRENCIES_ERROR= 'FETCH_CURRENCIES_ERROR',
  SET_TABLE_PAGE = 'SET_TABLE_PAGE',
}

interface IFetchCurrencyAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES,
  payload: any[],
}

interface IFetchCurrencySuccessAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS,
  payload: any[],
}

interface IFetchCurrencyErrorAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR,
  payload: string,
}

interface ISetTablePage {
  type: CurrencyActionTypes.SET_TABLE_PAGE,
  payload: number,
}

export type CurrencyAction =
IFetchCurrencyAction
| IFetchCurrencySuccessAction
| IFetchCurrencyErrorAction
| ISetTablePage
