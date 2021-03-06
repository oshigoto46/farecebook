import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer'
import ErrorsReducer from './errors_reducer'
import UIReducer from './ui_reducer';
import HelloReducer from './hello_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer,
  hello: HelloReducer
})

export default RootReducer;
