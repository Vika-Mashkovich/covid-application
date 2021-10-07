import { StatisticsAction, StatisticsActionTypes, ICountryStatisticsState } from '../../common/types/statisticsTypes';

const initialState: ICountryStatisticsState = {
  сountries: [],
  page: 1,
  limit: 20,
  loading: false,
  error: null,
};

export const countriesReducer = (state = initialState, action: StatisticsAction): ICountryStatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.FETCH_STATISTICS:
      return { ...state, loading: true };
    case StatisticsActionTypes.FETCH_STATISTICS_SUCCESS:
      return { ...state, сountries: action.payload, loading: false };
    case StatisticsActionTypes.FETCH_STATISTICS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case StatisticsActionTypes.SET_LIST_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
