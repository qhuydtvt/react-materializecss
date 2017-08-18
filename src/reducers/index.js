import { combineReducers } from 'redux';

import reducerItems from './reducer_items';

const rootReducer = combineReducers({
  items: reducerItems
});

export default rootReducer;
