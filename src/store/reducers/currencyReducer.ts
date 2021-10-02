import { CurrencyAction, CurrencyActionTypes, ICurrencyState } from '../../common/types/currencyTypes';

const initialState: ICurrencyState = {
  currencies: {},
  page: 1,
  limit: 10,
  loading: false,
  error: null,
};

export const currencyReducer = (state = initialState, action: CurrencyAction): ICurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.FETCH_CURRENCIES:
      return { ...state, currencies: { ...action.payload }, loading: true };
    case CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS:
      return { ...state, loading: false, currencies: action.payload };
    case CurrencyActionTypes.FETCH_CURRENCIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CurrencyActionTypes.SET_TABLE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
