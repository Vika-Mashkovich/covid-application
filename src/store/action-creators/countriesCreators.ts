import { Dispatch } from 'redux';
import { StatisticsAction, StatisticsActionTypes } from '../../common/types/statisticsTypes';
import StatisticsApi from '../../api/StatisticsCovidApi/providerStatistics';

export const fetchStatistics = () => async (dispatch: Dispatch<StatisticsAction>) => {
  try {
    dispatch({ type: StatisticsActionTypes.FETCH_STATISTICS });
    const responseCountries = await StatisticsApi.getCountriesStatistics();
    const responseGlobal = await StatisticsApi.getGlobalStatistics();

    dispatch(
      { type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS, payload: responseCountries },
    );
    dispatch(
      { type: StatisticsActionTypes.FETCH_STATISTICS_GLOBAL_SUCCESS, payload: responseGlobal },
    );
  } catch (e) {
    dispatch({
      type: StatisticsActionTypes.FETCH_STATISTICS_ERROR,
      payload: 'There was an error loading',
    });
  }
};

export const setListPage = (page: number): StatisticsAction => (
  { type: StatisticsActionTypes.SET_LIST_PAGE, payload: page });
