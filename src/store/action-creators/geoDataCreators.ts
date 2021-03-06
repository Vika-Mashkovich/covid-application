import { Dispatch } from 'redux';
import { GeoDataAction, GeoDataActionTypes } from '../../common/types/geoDataTypes';
import GeoDataApi from '../../api/GeoDataApi/providerGeoData';

export const fetchGeoData = () => async (dispatch: Dispatch<GeoDataAction>) => {
  try {
    dispatch({ type: GeoDataActionTypes.FETCH_GEO_DATA });
    const response = await GeoDataApi.getGeoData();

    dispatch(
      { type: GeoDataActionTypes.FETCH_GEO_DATA_SUCCESS, payload: response },
    );
  } catch (e) {
    dispatch({
      type: GeoDataActionTypes.FETCH_GEO_DATA_ERROR,
      payload: 'There was an error loading',
    });
  }
};
