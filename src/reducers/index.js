import {combineReducers} from "redux";
import userReducer from './user';
import pageReducer from './page';

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer
});

export default rootReducer

