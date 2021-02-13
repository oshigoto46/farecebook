import { combineReducers } from 'redux';
import _SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer'
import ErrorsReducer from './errors_reducer'
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: _SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
})

export default RootReducer;
