import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import settingsReducer from './settingsReducer';



const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer
