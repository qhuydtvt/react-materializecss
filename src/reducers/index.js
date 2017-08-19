import { combineReducers } from 'redux';

import reducerItems from './reducer_items';
import reducerNewRecordDialog from './reducer_add_record_dialog';

const rootReducer = combineReducers({
  items: reducerItems,
  newRecordDialog: reducerNewRecordDialog
});

export default rootReducer;
