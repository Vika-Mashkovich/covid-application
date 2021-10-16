import { Dispatch } from 'redux';
import axios from 'axios';
import { StatisticsAction, StatisticsActionTypes } from '../../common/types/statisticsTypes';
import { converterCountries } from '../../api/StatisticsCovidApi/converterCountries';
import { converterGlobal } from '../../api/StatisticsCovidApi/converterGlobal';

export const fetchStatistics = () => async (dispatch: Dispatch<StatisticsAction>) => {
  try {
    dispatch({ type: StatisticsActionTypes.FETCH_STATISTICS });
    const response = await axios.get('https://api.covid19api.com/summary');

    dispatch(
      { type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS, payload: converterCountries(response.data.Countries) },
    );
    dispatch(
      { type: StatisticsActionTypes.FETCH_STATISTICS_GLOBAL_SUCCESS, payload: converterGlobal(response.data.Global) },
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
export function fetchGeoData() {
  throw new Error('Function not implemented.');
}
