import { combineReducers, configureStore } from '@reduxjs/toolkit';
import optionSlice from './optionSlice';
import settingSlice from './settingSlice';

const reducers = combineReducers({
  setting: settingSlice,
  option: optionSlice,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
