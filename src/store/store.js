import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {
  quizReducer,
  usersReducer,
  questionsReducer,
  categoriesReducer,
  planningTestReducer,
} from './reducers/index';

const reducers = combineReducers({
  quiz: quizReducer,
  users: usersReducer,
  category: categoriesReducer,
  questionsData: questionsReducer,
  planningTests: planningTestReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
