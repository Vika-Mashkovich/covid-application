import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer } from './reducers/countriesReducer';

export const store = createStore(countriesReducer, composeWithDevTools(applyMiddleware(thunk)));
