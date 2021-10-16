import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/reducers';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
