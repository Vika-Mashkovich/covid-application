import { GeoDataAction, GeoDataActionTypes, IGeoDataState } from '../../common/types/geoDataTypes';

const initialState: IGeoDataState = {
  loading: false,
  error: null,
  geoData: [],
};

export const geoDataReducer = (state = initialState, action: GeoDataAction): IGeoDataState => {
  switch (action.type) {
    case GeoDataActionTypes.FETCH_GEO_DATA:
      return { ...state, loading: true };
    case GeoDataActionTypes.FETCH_GEO_DATA_SUCCESS:
      return { ...state, geoData: action.payload, loading: false };
    case GeoDataActionTypes.FETCH_GEO_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
