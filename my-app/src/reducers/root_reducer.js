import { combineReducers } from 'redux';

import searchReducer from './search_reducer';
import trendingReducer from './trending_reducer';

export default combineReducers({
  search: searchReducer,
  trending: trendingReducer,
});
