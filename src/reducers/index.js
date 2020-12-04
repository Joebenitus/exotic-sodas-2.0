import formVisibleReducer from './form-visible-reducer';
import sodaListReducer from './soda-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterSodaList: sodaListReducer
});

export default rootReducer;