import { Dispatch } from 'redux';
import axios from 'axios';
import { converterGeoData } from '../../api/GeoDataApi/converterGeoData';
import { GeoDataAction, GeoDataActionTypes } from '../../common/types/geoDataTypes';

export const fetchGeoData = () => async (dispatch: Dispatch<GeoDataAction>) => {
  try {
    dispatch({ type: GeoDataActionTypes.FETCH_GEO_DATA });
    const response = await axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=countries-codes&q=&rows=250');

    dispatch(
      { type: GeoDataActionTypes.FETCH_GEO_DATA_SUCCESS, payload: converterGeoData(response.data.records) },
    );
  } catch (e) {
    dispatch({
      type: GeoDataActionTypes.FETCH_GEO_DATA_ERROR,
      payload: 'There was an error loading',
    });
  }
};
