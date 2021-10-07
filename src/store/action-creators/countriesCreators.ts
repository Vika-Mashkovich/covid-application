import { Dispatch } from 'redux';
import axios from 'axios';
import { StatisticsAction, StatisticsActionTypes } from '../../common/types/statisticsTypes';
import { converterCountries } from '../../api/StatisticsCovidApi/converterCountries';

export const fetchStatistics = () => async (dispatch: Dispatch<StatisticsAction>) => {
  try {
    dispatch({ type: StatisticsActionTypes.FETCH_STATISTICS });
    const response = await axios.get('https://api.covid19api.com/summary');

    dispatch(
      { type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS, payload: converterCountries(response.data.Countries) },
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
