import { combineReducers, configureStore } from '@reduxjs/toolkit';
import settingSlice from './settingSlice';

const reducers = combineReducers({
  setting: settingSlice,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
