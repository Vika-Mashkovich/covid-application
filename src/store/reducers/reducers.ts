import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';
import { geoDataReducer } from './geoDataReducer';

export const rootReducer = combineReducers({
  countriesData: countriesReducer,
  geoData: geoDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>
