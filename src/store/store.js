import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/index';

const reducers = combineReducers({
    category: categoriesReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));