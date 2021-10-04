import { StatisticsAction, StatisticsActionTypes, ICountryStatisticsState } from '../../common/types/statisticsTypes';

const initialState: ICountryStatisticsState = {
  сountries: {},
  page: 1,
  limit: 10,
  loading: false,
  error: null,
};

export const currencyReducer = (state = initialState, action: StatisticsAction): ICountryStatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.FETCH_STATISTICS:
      return { ...state, сountries: { ...action.payload }, loading: true };
    case StatisticsActionTypes.FETCH_STATISTICS_SUCCESS:
      return { ...state, loading: false, сountries: action.payload };
    case StatisticsActionTypes.FETCH_STATISTICS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case StatisticsActionTypes.SET_LIST_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
