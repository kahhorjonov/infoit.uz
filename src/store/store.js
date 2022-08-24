import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {
  categoriesReducer,
  planningTestReducer,
  questionsReducer,
  quizReducer,
  usersReducer,
} from './reducers/index';

const reducers = combineReducers({
  category: categoriesReducer,
  questionsData: questionsReducer,
  quiz: quizReducer,
  users: usersReducer,
  planningTests: planningTestReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
