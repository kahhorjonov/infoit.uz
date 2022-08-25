import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {
  quizReducer,
  usersReducer,
  userTestsReducer,
  questionsReducer,
  categoriesReducer,
  planningTestReducer,
  getMeReducer,
} from './reducers/index';

const reducers = combineReducers({
  quiz: quizReducer,
  users: usersReducer,
  category: categoriesReducer,
  userTests: userTestsReducer,
  questionsData: questionsReducer,
  planningTests: planningTestReducer,
  profileData: getMeReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
