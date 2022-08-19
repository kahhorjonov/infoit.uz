import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {
  categoriesReducer,
  // paginationsReducer,
  planningTestReducer,
  questionsReducer,
  usersReducer,
} from './reducers/index';

const reducers = combineReducers({
  category: categoriesReducer,
  questionsData: questionsReducer,
  // paginations: paginationsReducer,
  users: usersReducer,
  planningTests: planningTestReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
