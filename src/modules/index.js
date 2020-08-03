import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import classInfo from './classInfo';
import classes from './classes';
import category from './category';
import teacherInfo from './teacherInfo';
import schedule from './schedule';
import {composeWithDevTools} from 'redux-devtools-extension';

//  set rootReducer
const rootReducer = combineReducers({
  classes,
  category,
  classInfo,
  teacherInfo,
  schedule,
});
// set redux Middleware && redux thunk for REST API
const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

export default configureStore;
