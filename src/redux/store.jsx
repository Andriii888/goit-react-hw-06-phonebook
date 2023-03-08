import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { numbersReducer } from './numberSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  numbers: numbersReducer,
  filters: filtersReducer,
});
const numberPersistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: numberPersistedReducer,
});
export const persistor = persistStore(store);
