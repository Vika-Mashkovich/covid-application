export interface ICurrencyState {
  currencies: any[],
  page: number,
  limit: number,
  loading: boolean,
}

export enum CurrencyActionTypes {
  FETCH_CURRENCIES = 'FETCH_CURRENCIES',
  FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
  SET_TABLE_PAGE = 'SET_TABLE_PAGE',
}

interface FetchCurrencyAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES,
  payload: any[],
}

interface FetchCurrencySuccessAction {
  type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS,
  payload: any[],
}

interface SetTablePage {
  type: CurrencyActionTypes.SET_TABLE_PAGE,
  payload: number,
}

export type CurrencyAction = FetchCurrencyAction | FetchCurrencySuccessAction | SetTablePage
