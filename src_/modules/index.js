import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import classInfo from './classInfo';
import classes from './classes';
import category from './category';

//  set rootReducer
const rootReducer = combineReducers({
  classes,
  category,
  classInfo,
});
// set redux Middleware && redux thunk for REST API
const configureStore = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default configureStore;
